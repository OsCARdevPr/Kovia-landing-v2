# Resumen de etiquetas y eventos de tracking

Este documento resume las etiquetas, contenedores y eventos de medicion que tiene el proyecto actualmente.

## Contenedores de Google Tag Manager

- **Contenedor web:** `GTM-TM88PJZ3`
  - Es el contenedor que se carga en el navegador del usuario.
  - Esta instalado en el layout de Astro en `src/components/layout/BaseLayout.astro`.
- **Contenedor servidor:** `GTM-WJ6KJ84X`
  - Existe en tu cuenta de GTM como contenedor de servidor.
  - No se carga directamente en el sitio del usuario; solo recibe eventos si el web container, el backend o una configuracion server-side le envian datos.

## Eventos que genera el codigo

### 1. `gtm.js`
- **Origen:** carga inicial de GTM en `src/components/layout/BaseLayout.astro`.
- **Cuando ocurre:** al abrir la pagina.
- **Uso:** inicializar el contenedor web.

### 2. `consent_update`
- **Origen:** banner de consentimiento en `src/components/layout/ConsentBanner.astro`.
- **Cuando ocurre:** al aceptar o rechazar cookies.
- **Campos enviados:**
  - `consent_state`
  - `ad_storage`
  - `analytics_storage`
- **Valores posibles:** `granted` o `denied`.

### 3. `cta_click`
- **Origen:** apertura del formulario desde los CTA del sitio.
- **Cuando ocurre:** al hacer clic en un CTA que abre el formulario.
- **Campos enviados:**
  - `event_id`
  - `cta_location`
  - `cta_text`
  - `cta_target`
  - `lead_session_id`
- **Ubicaciones actuales:**
  - `hero`
  - `navbar`
  - `final_cta`

### 4. `lead_form_opened`
- **Origen:** `src/components/landing/LeadQualificationModal.tsx`.
- **Cuando ocurre:** inmediatamente despues de abrir el modal del formulario.
- **Campos enviados:**
  - `event_id`
  - `form_id`
  - `form_url`
  - `cta_location`
  - `cta_text`
  - `lead_session_id`
- **Uso:** medir interes real en el formulario.

### 5. `lead_form_submitted`
- **Origen:** `src/components/landing/LeadQualificationModal.tsx`.
- **Cuando ocurre:** cuando el iframe externo envia un `postMessage` de exito al sitio padre.
- **Campos enviados:**
  - `event_id`
  - `form_id`
  - `form_url`
  - `form_origin`
  - `source`
  - `status`
  - `lead_session_id`
- **Uso:** conversion real del lead.

## Flujo de medicion

1. El usuario entra al sitio y GTM dispara `gtm.js`.
2. El banner de cookies dispara `consent_update` cuando el usuario elige aceptar o rechazar.
3. Al tocar un CTA, se dispara `cta_click`.
4. Al abrir el modal, se dispara `lead_form_opened`.
5. Cuando el formulario externo confirma exito con `postMessage`, se dispara `lead_form_submitted`.

## Lo que ya no esta en el codigo

- El snippet directo de Meta Pixel fue retirado del codigo del sitio.
- El tracking de Meta debe configurarse dentro de Google Tag Manager.

## Recomendacion de validacion

- Usa **Tag Assistant Preview** para ver los eventos `gtm.js`, `consent_update`, `cta_click`, `lead_form_opened` y `lead_form_submitted`.
- Usa **Meta Events Manager** para confirmar que GTM esta enviando los eventos de Meta que configures.
- Si el contenedor de servidor se usa para Meta CAPI, valida que reciba los eventos reenviados desde el contenedor web o desde tu backend.

## Nota importante

El contenedor de servidor por si solo no reemplaza al contenedor web. Para que el navegador del usuario dispare medicion visible en el sitio, el contenedor web `GTM-TM88PJZ3` debe estar cargado en la pagina.
