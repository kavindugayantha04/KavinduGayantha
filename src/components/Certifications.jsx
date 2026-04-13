import { useCallback, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'
import { CERTIFICATIONS } from '../data/certifications'
import { usePrefersFinePointer } from '../hooks/usePrefersFinePointer'

function isValidCertLink(link) {
  if (link == null || typeof link !== 'string') return false
  const t = link.trim()
  return t.length > 0 && (t.startsWith('http://') || t.startsWith('https://'))
}

function CertificationCard({ cert, index }) {
  const finePointer = usePrefersFinePointer()
  const rootRef = useRef(null)
  const [glow, setGlow] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const updateGlow = useCallback((clientX, clientY) => {
    const el = rootRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    setGlow({ x: clientX - r.left, y: clientY - r.top })
  }, [])

  const onMove = (e) => {
    if (!finePointer) return
    updateGlow(e.clientX, e.clientY)
  }

  const onEnter = (e) => {
    setHovered(true)
    if (finePointer) updateGlow(e.clientX, e.clientY)
  }

  const onLeave = () => setHovered(false)

  return (
    <motion.li
      ref={rootRef}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`group/cert relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-[color:var(--border-color)] bg-[var(--surface-card)] px-5 py-4 shadow-[var(--shadow-card)] transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out hover:border-[#3b82f6]/35 hover:shadow-[0_14px_44px_-18px_rgba(59,130,246,0.28)] [data-theme='light']:hover:shadow-[0_14px_44px_-18px_rgba(59,130,246,0.14)] ${
        finePointer ? 'hover:-translate-y-[5px] hover:bg-[color-mix(in_oklab,var(--surface-card)_94%,#3b82f6)]' : ''
      } `}
    >
      {/* Cursor spotlight — desktop / fine pointer only */}
      {finePointer ? (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover/cert:opacity-100"
          style={{
            background:
              hovered && finePointer
                ? `radial-gradient(420px circle at ${glow.x}px ${glow.y}px, rgb(59 130 246 / 0.11), transparent 55%)`
                : undefined,
          }}
          aria-hidden
        />
      ) : null}

      <div className="relative z-[1] flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <p className="font-medium text-[var(--text-primary)]">{cert.title}</p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">{cert.issuer}</p>
          </div>
          <span className="shrink-0 rounded-lg bg-[var(--surface-subtle)] px-2.5 py-1 text-xs font-medium text-[var(--text-secondary)]">
            {cert.date}
          </span>
        </div>
        {isValidCertLink(cert.link) ? (
          <a
            href={cert.link.trim()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-fit max-w-full items-center justify-center self-start rounded-lg border border-[color:var(--border-color)] bg-[var(--surface-subtle)] px-3.5 text-xs font-medium text-[#3b82f6] transition hover:border-[#3b82f6]/40 hover:bg-[#3b82f6]/10 hover:text-[#2563eb] [data-theme='light']:hover:bg-[#3b82f6]/8"
          >
            View Certificate
          </a>
        ) : null}
      </div>
    </motion.li>
  )
}

export function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-20 border-b border-[color:var(--border-color)] bg-[var(--surface-section)] py-20 transition-colors duration-300 md:py-28"
      aria-labelledby="certifications-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div id="certifications-heading">
          <SectionTitle
            eyebrow="Certifications"
            title="Learning milestones"
            subtitle="Short, verifiable steps that complement my degree and project work."
          />
        </div>
        <ul className="grid gap-4 md:grid-cols-2">
          {CERTIFICATIONS.map((c, i) => (
            <CertificationCard key={`${c.title}-${c.date}`} cert={c} index={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}
