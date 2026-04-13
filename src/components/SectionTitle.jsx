import { motion } from 'framer-motion'

export function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10 md:mb-14">
      {eyebrow ? (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mb-2 text-sm font-medium tracking-wide text-[#3b82f6]"
        >
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] md:text-3xl"
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--text-muted)]"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  )
}
