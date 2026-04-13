import { useState, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { SectionTitle } from './SectionTitle'
import { SITE } from '../config/site'
import { EMAILJS_CONFIG, isEmailJsConfigured } from '../config/emailjs'

function GitHubIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"
      />
    </svg>
  )
}

function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const LEFT_DESCRIPTION =
  "I'm currently looking for internship opportunities in AI/ML and Full Stack Development. Whether you have a question, a project idea, or just want to connect, feel free to reach out."

const inputClass =
  'mt-2 w-full rounded-xl border border-[color:var(--border-color)] bg-[var(--surface-subtle)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-faint)] hover:border-[#3b82f6]/25 focus:border-[#3b82f6]/55 focus:ring-2 focus:ring-[#3b82f6]/18'

/** Inbox for EmailJS template variable `to_email` — must match your portfolio inbox */
const TO_EMAIL = 'kavindugayanth178@gmail.com'

function isValidEmail(value) {
  const v = value.trim()
  if (!v) return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}

export function Contact() {
  const formRef = useRef(null)
  const [name, setName] = useState('')
  const [senderEmail, setSenderEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [submitError, setSubmitError] = useState('')

  const validate = useCallback(() => {
    const next = {}
    if (!name.trim()) next.name = 'Please enter your name.'
    if (!senderEmail.trim()) next.email = 'Please enter your email address.'
    else if (!isValidEmail(senderEmail)) next.email = 'Please enter a valid email address.'
    if (!message.trim()) next.message = 'Please enter a message.'
    return next
  }, [name, senderEmail, message])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError('')
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return

    const form = formRef.current
    if (!form) return

    if (!isEmailJsConfigured()) {
      setStatus('config_error')
      setSubmitError(
        'Contact form is not configured yet. Add VITE_EMAILJS_* keys in .env.local (see src/config/emailjs.js).',
      )
      return
    }

    setStatus('loading')
    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        form,
        EMAILJS_CONFIG.publicKey,
      )
      setStatus('success')
      setErrors({})
      form.reset()
      setName('')
      setSenderEmail('')
      setMessage('')
    } catch (err) {
      console.error(err)
      setStatus('error')
      setSubmitError('Something went wrong sending your message. Please try again or email me directly.')
    }
  }

  const submitting = status === 'loading'
  const inputDisabled = submitting

  const clearFieldError = (key) => {
    setErrors((prev) => {
      if (!prev[key]) return prev
      const next = { ...prev }
      delete next[key]
      return next
    })
  }

  const resetFeedback = () => {
    if (status === 'success' || status === 'error' || status === 'config_error') {
      setStatus('idle')
      setSubmitError('')
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-[var(--surface-main)] py-20 transition-colors duration-300 md:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div id="contact-heading">
          <SectionTitle
            eyebrow="Contact"
            title="Let’s connect"
            subtitle="Reach out for internships, collaborations, or a quick conversation about data and web projects."
          />
        </div>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="group/contact rounded-2xl border border-[color:var(--border-color)] bg-[var(--surface-card)] p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:border-[#3b82f6]/20 hover:shadow-[0_14px_44px_-20px_rgba(59,130,246,0.12)]"
          >
            <p className="text-sm font-medium text-[var(--text-primary)]">Direct channels</p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-3 block text-lg font-semibold text-[#3b82f6] transition hover:text-[#2563eb]"
            >
              {SITE.email}
            </a>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={SITE.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--border-color)] bg-[var(--surface-subtle)] px-4 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition hover:border-[#3b82f6]/35 hover:bg-[var(--surface-muted)]"
              >
                <GitHubIcon className="h-5 w-5" />
                GitHub
              </a>
              <a
                href={SITE.linkedinUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--border-color)] bg-[var(--surface-subtle)] px-4 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition hover:border-[#3b82f6]/35 hover:bg-[var(--surface-muted)]"
              >
                <LinkedInIcon className="h-5 w-5" />
                LinkedIn
              </a>
            </div>
            <p className="mt-8 text-sm leading-relaxed text-[var(--text-muted)]">{LEFT_DESCRIPTION}</p>
          </motion.div>

          <motion.form
            ref={formRef}
            id="portfolio-contact-form"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            className="group/contact rounded-2xl border border-[color:var(--border-color)] bg-[var(--surface-card)] p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:border-[#3b82f6]/20 hover:shadow-[0_14px_44px_-20px_rgba(59,130,246,0.12)]"
            noValidate
            aria-busy={submitting}
          >
            {/* Hidden field for EmailJS template variable `to_email` — delivery address */}
            <input type="hidden" name="to_email" value={TO_EMAIL} readOnly tabIndex={-1} aria-hidden />

            <p className="text-sm font-medium text-[var(--text-primary)]">Send a message</p>
            <p className="mt-1 text-xs text-[var(--text-faint)]">
              Messages are sent securely via EmailJS. I typically reply within a few days.
            </p>

            <label className="mt-6 block text-xs font-medium uppercase tracking-wider text-[var(--text-faint)]">
              Name
              <input
                name="from_name"
                type="text"
                autoComplete="name"
                value={name}
                disabled={inputDisabled}
                onChange={(ev) => {
                  resetFeedback()
                  setName(ev.target.value)
                  clearFieldError('name')
                }}
                className={inputClass}
                placeholder="Your name"
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
              />
              {errors.name ? (
                <span id="contact-name-error" className="mt-1.5 block text-xs text-red-500 dark:text-red-400" role="alert">
                  {errors.name}
                </span>
              ) : null}
            </label>

            <label className="mt-4 block text-xs font-medium uppercase tracking-wider text-[var(--text-faint)]">
              Sender email
              <input
                name="from_email"
                type="email"
                autoComplete="email"
                inputMode="email"
                value={senderEmail}
                disabled={inputDisabled}
                onChange={(ev) => {
                  resetFeedback()
                  setSenderEmail(ev.target.value)
                  clearFieldError('email')
                }}
                className={inputClass}
                placeholder="Your email address"
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
              />
              {errors.email ? (
                <span id="contact-email-error" className="mt-1.5 block text-xs text-red-500 dark:text-red-400" role="alert">
                  {errors.email}
                </span>
              ) : null}
            </label>

            <label className="mt-4 block text-xs font-medium uppercase tracking-wider text-[var(--text-faint)]">
              Message
              <textarea
                name="message"
                rows={4}
                value={message}
                disabled={inputDisabled}
                onChange={(ev) => {
                  resetFeedback()
                  setMessage(ev.target.value)
                  clearFieldError('message')
                }}
                className={`${inputClass} resize-y min-h-[120px]`}
                placeholder="Briefly share your message"
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
              />
              {errors.message ? (
                <span id="contact-message-error" className="mt-1.5 block text-xs text-red-500 dark:text-red-400" role="alert">
                  {errors.message}
                </span>
              ) : null}
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="mt-6 w-full rounded-xl bg-[#3b82f6] py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(59,130,246,0.35)] transition enabled:hover:bg-[#2563eb] enabled:focus-visible:ring-2 enabled:focus-visible:ring-[#3b82f6]/40 enabled:focus-visible:ring-offset-2 enabled:focus-visible:ring-offset-[var(--surface-card)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[160px] sm:px-8"
            >
              {submitting ? (
                <span className="inline-flex items-center justify-center gap-2">
                  <span
                    className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
                    aria-hidden
                  />
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>

            <div className="mt-4 min-h-[1.5rem] text-sm" role="status" aria-live="polite">
              {status === 'success' ? (
                <p className="font-medium text-emerald-600 dark:text-emerald-400">
                  Message sent successfully. I’ll get back to you soon.
                </p>
              ) : null}
              {status === 'error' || status === 'config_error' ? (
                <p className="text-red-600 dark:text-red-400">{submitError}</p>
              ) : null}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
