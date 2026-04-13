import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { SectionTitle } from './SectionTitle'
import { EDUCATION_ENTRIES } from '../data/education'

const itemMotion = {
  hidden: { opacity: 0, y: 18 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-20 border-b border-[color:var(--border-color)] bg-[var(--surface-main)] py-24 transition-colors duration-300 md:py-32"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div id="education-heading" className="max-w-3xl">
          <SectionTitle eyebrow="Education" title="My Academic Journey" />
        </div>

        <div className="relative mt-14 md:mt-16">
          {/* Vertical spine — centered in the timeline column (w-11 / md:w-12) */}
          <div
            className="pointer-events-none absolute top-7 bottom-7 left-[calc(1.375rem-1px)] w-[2px] rounded-full bg-gradient-to-b from-[#3b82f6]/55 via-[#3b82f6]/28 to-[#3b82f6]/12 md:top-8 md:bottom-8 md:left-[calc(1.5rem-1px)]"
            aria-hidden
          />

          <ol className="relative m-0 list-none space-y-10 p-0 md:space-y-12">
            {EDUCATION_ENTRIES.map((entry, index) => (
              <li key={entry.id} className="flex items-start gap-6 md:gap-10">
                {/* Timeline column — fixed width so dots + line stay aligned */}
                <div className="relative z-10 flex w-11 shrink-0 flex-col items-center md:w-12">
                  <span
                    className="mt-2 h-4 w-4 shrink-0 rounded-full border-2 border-[#3b82f6] bg-[var(--surface-main)] shadow-[0_0_16px_rgba(59,130,246,0.45)] ring-[3px] ring-[var(--surface-main)] md:mt-2.5 md:h-[18px] md:w-[18px]"
                    aria-hidden
                  />
                </div>

                <motion.article
                  custom={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={itemMotion}
                  whileHover={{ y: -3, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } }}
                  className="group min-w-0 flex-1 rounded-2xl border border-[color:var(--border-color)] bg-[var(--surface-card)]/95 p-7 shadow-[var(--shadow-card)] backdrop-blur-sm transition-all duration-300 hover:border-[#3b82f6]/30 hover:shadow-[0_16px_48px_-20px_rgba(59,130,246,0.22)] md:p-8 [data-theme='light']:hover:shadow-[0_16px_48px_-20px_rgba(15,23,42,0.1)]"
                >
                  <header className="flex gap-4 md:gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#3b82f6]/12 text-[#3b82f6] ring-1 ring-[#3b82f6]/20 transition duration-300 group-hover:bg-[#3b82f6]/15 group-hover:ring-[#3b82f6]/32">
                      <GraduationCap className="h-[22px] w-[22px]" strokeWidth={1.75} aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1 space-y-2">
                      {entry.duration ? (
                        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-[#3b82f6] md:text-xs">
                          {entry.duration}
                        </p>
                      ) : null}
                      <h3 className="text-lg font-semibold leading-snug tracking-tight text-[var(--text-primary)] md:text-[1.25rem] md:leading-snug">
                        {entry.title}
                      </h3>
                      <p className="text-sm font-medium leading-relaxed text-[var(--text-secondary)] md:text-[0.9375rem]">
                        {entry.institute}
                      </p>
                    </div>
                  </header>
                  <p className="mt-6 max-w-prose border-t border-[color:var(--border-color)] pt-6 text-sm leading-[1.7] text-[var(--text-muted)] md:mt-7 md:pt-7 md:text-[0.9375rem]">
                    {entry.description}
                  </p>
                </motion.article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
