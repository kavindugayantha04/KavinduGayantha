/**
 * EmailJS (https://www.emailjs.com/) — client-side email via `emailjs.sendForm()`.
 *
 * ─── VITE ENVIRONMENT VARIABLES (required) ─────────────────────────────────
 * Create `.env.local` in the project root (see `.env.example`) and set:
 *
 *   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
 *   VITE_EMAILJS_SERVICE_ID=your_service_id_here
 *   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
 *
 * On Vercel: Project → Settings → Environment Variables → add the same three.
 * Redeploy after changing env vars.
 * ───────────────────────────────────────────────────────────────────────────
 *
 * EmailJS template: use these **form field names** (must match the <input> names
 * in `Contact.jsx`): `from_name`, `from_email`, `message`, `to_email`.
 * Example template body:
 *   To: {{to_email}}
 *   Subject: Portfolio message from {{from_name}}
 *   Body: From {{from_name}} <{{from_email}}>\n\n{{message}}
 *
 * ↓↓↓ Do not put secrets in this file — only use the VITE_* env vars above. ↓↓↓
 */
export const EMAILJS_CONFIG = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '',
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '',
}

export function isEmailJsConfigured() {
  const { publicKey, serviceId, templateId } = EMAILJS_CONFIG
  return Boolean(
    publicKey && publicKey.length > 0 && serviceId && serviceId.length > 0 && templateId && templateId.length > 0,
  )
}
