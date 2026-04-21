import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const OPEN_FORM_EVENT = "kovia:open-lead-form";
const CLOSE_FORM_EVENT = "kovia:close-lead-form";

const EMBED_URL =
  import.meta.env.PUBLIC_FORM_URL ?? "https://form.oscardev.software/lead-qualificator";

const FORM_ALLOWED_ORIGIN = import.meta.env.PUBLIC_FORM_ALLOWED_ORIGIN;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

const toNormalizedString = (value: unknown): string =>
  String(value ?? "")
    .trim()
    .toLowerCase();

const parseMessageData = (data: unknown): unknown => {
  if (typeof data !== "string") {
    return data;
  }

  const text = data.trim();
  if (!text) {
    return data;
  }

  if (!text.startsWith("{") && !text.startsWith("[")) {
    return data;
  }

  try {
    return JSON.parse(text);
  } catch {
    return data;
  }
};

const isSuccessfulLeadMessage = (payload: unknown): boolean => {
  const parsed = parseMessageData(payload);

  if (typeof parsed === "string") {
    const message = toNormalizedString(parsed);
    return (
      message === "kovia:lead-submitted" ||
      message.includes("lead_submitted") ||
      message.includes("complete_registration")
    );
  }

  if (!parsed || typeof parsed !== "object") {
    return false;
  }

  const data = parsed as Record<string, unknown>;
  const type = toNormalizedString(data.type);
  const event = toNormalizedString(data.event);
  const name = toNormalizedString(data.name);
  const status = toNormalizedString(data.status);

  return (
    type === "kovia:lead-submitted" ||
    event === "kovia:lead-submitted" ||
    event === "lead_submitted" ||
    event === "complete_registration" ||
    (event === "form_submitted" && status !== "error") ||
    (name === "lead" && (status === "success" || status === "submitted"))
  );
};

export function LeadQualificationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const hasTrackedSubmitRef = useRef(false);

  useEffect(() => {
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    window.addEventListener(OPEN_FORM_EVENT, openModal);
    window.addEventListener(CLOSE_FORM_EVENT, closeModal);

    return () => {
      window.removeEventListener(OPEN_FORM_EVENT, openModal);
      window.removeEventListener(CLOSE_FORM_EVENT, closeModal);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    hasTrackedSubmitRef.current = false;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    const allowedOrigin = FORM_ALLOWED_ORIGIN ?? new URL(EMBED_URL, window.location.origin).origin;

    const onMessage = (event: MessageEvent) => {
      if (!isOpen || hasTrackedSubmitRef.current) {
        return;
      }

      if (event.origin !== allowedOrigin) {
        return;
      }

      if (!isSuccessfulLeadMessage(event.data)) {
        return;
      }

      hasTrackedSubmitRef.current = true;

      window.fbq?.("track", "Lead");
      window.fbq?.("track", "CompleteRegistration");

      window.dataLayer = window.dataLayer ?? [];
      window.dataLayer.push({
        event: "lead_form_submitted",
        source: "lead_qualification_modal",
        meta_events: ["Lead", "CompleteRegistration"]
      });

      setIsOpen(false);
    };

    window.addEventListener("message", onMessage);

    return () => {
      window.removeEventListener("message", onMessage);
    };
  }, [isOpen]);

  const close = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <button
            aria-label="Cerrar formulario"
            onClick={close}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-[1] w-full max-w-[980px]"
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-2 top-2 z-10 rounded-full bg-black/70 px-3 py-1 text-xs font-mono uppercase tracking-wider text-white"
            >
              Cerrar
            </button>

            <div style={{ width: "100%", maxWidth: "980px", margin: "0 auto" }}>
              <iframe
                src={EMBED_URL}
                title="Formulario Discovery Form v2.0"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                allow="fullscreen"
                style={{
                  width: "100%",
                  height: "720px",
                  border: 0,
                  borderRadius: "24px",
                  overflow: "hidden",
                  background: "transparent",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
