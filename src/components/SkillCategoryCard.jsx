import { useCallback, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Brain, Code2, Database, Layers, LayoutTemplate, Terminal } from 'lucide-react'
import { usePrefersFinePointer } from '../hooks/usePrefersFinePointer'
import { getSkillTagIcon } from '../data/skillTagIcons'

const ICON_MAP = {
  programming: Code2,
  web: LayoutTemplate,
  database: Database,
  ml: Brain,
  tools: Terminal,
  concepts: Layers,
}

export function SkillCategoryCard({ title, items, iconKey }) {
  const Icon = ICON_MAP[iconKey] ?? Code2
  const rootRef = useRef(null)
  const finePointer = usePrefersFinePointer()
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

  const onLeave = () => {
    setHovered(false)
  }

  return (
    <motion.article
      ref={rootRef}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 420, damping: 28 }}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[color:var(--border-color)] bg-[var(--surface-card)] p-7 shadow-[var(--shadow-card)] transition-colors duration-300 md:p-8"
    >
      {/* Desktop spotlight — follows cursor */}
      {finePointer ? (
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: hovered
              ? `radial-gradient(520px circle at ${glow.x}px ${glow.y}px, rgb(59 130 246 / 0.16), transparent 52%)`
              : undefined,
          }}
          aria-hidden
        />
      ) : null}

      {/* Static edge highlight (all devices) */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 shadow-[inset_0_1px_0_0_rgb(255_255_255_/_0.06)] transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />

      <div className="relative z-[1] flex flex-1 flex-col">
        <div className="mb-5 flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#3b82f6]/12 text-[#3b82f6] ring-1 ring-[#3b82f6]/25 transition duration-300 group-hover:bg-[#3b82f6]/18 group-hover:ring-[#3b82f6]/35">
            <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
          </div>
          <h3 className="pt-0.5 text-lg font-semibold leading-snug tracking-tight text-[var(--text-primary)] md:text-xl">
            {title}
          </h3>
        </div>

        <ul className="mt-auto flex flex-wrap gap-2.5">
          {items.map((skill) => {
            const TagIcon = getSkillTagIcon(skill)
            return (
              <li key={skill}>
                <span className="group/tag inline-flex items-center gap-1.5 rounded-xl border border-[color:var(--border-color)] bg-[var(--surface-subtle)] px-2.5 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-all duration-200 group-hover:border-[#3b82f6]/25 hover:border-[#3b82f6]/50 hover:bg-[#3b82f6]/[0.09] hover:text-[var(--text-primary)] md:gap-2 md:px-3 md:text-[0.8125rem]">
                  <TagIcon
                    className="h-4 w-4 shrink-0 text-[var(--text-faint)] opacity-90 transition-colors duration-200 group-hover/tag:text-[#3b82f6] group-hover/tag:opacity-100"
                    aria-hidden
                  />
                  <span className="leading-tight">{skill}</span>
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </motion.article>
  )
}
