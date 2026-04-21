import type { ReactNode } from "react";

interface KoviaBtnProps {
  readonly children: ReactNode;
  readonly onClick?: () => void;
  readonly className?: string;
  readonly sm?: boolean;
  readonly href?: string;
  readonly target?: string;
  readonly rel?: string;
  readonly type?: "button" | "submit" | "reset";
  readonly disabled?: boolean;
}

export function KoviaBtn({
  children,
  onClick,
  className = "",
  sm = false,
  href,
  target,
  rel,
  type = "button",
  disabled = false,
}: KoviaBtnProps) {
  const Tag = href ? "a" : "button";

  return (
    <div className={`kovia-btn-wrapper ${className} ${disabled ? "opacity-50 pointer-events-none grayscale" : ""}`}>
      <div className={`kovia-btn-shadow ${sm ? "btn-sm" : ""}`} />
      <Tag
        href={disabled ? undefined : href}
        target={target}
        rel={rel}
        onClick={disabled ? undefined : onClick}
        type={Tag === "button" ? type : undefined}
        className={`kovia-btn-content ${sm ? "btn-sm" : ""} group`}
        style={{ cursor: disabled ? "not-allowed" : "pointer" }}
        disabled={Tag === "button" ? disabled : undefined}
      >
        {children}
      </Tag>
    </div>
  );
}
