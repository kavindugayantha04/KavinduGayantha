import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'

const ABOUT_BODY = [
  'I am Kavindu Gayantha, a second-year Data Science student at SLIIT with a strong interest in machine learning, data analytics, and software development. My academic journey and hands-on projects have helped me build a solid foundation in programming, problem-solving, and modern web technologies.',
  'I enjoy working on practical projects that connect theoretical knowledge with real-world applications. I am continuously learning, improving my skills, and exploring new technologies to grow into a skilled and versatile IT professional.',
]

const CARDS = [
  {
    title: 'Machine Learning',
    text: 'Exploring intelligent models and practical AI-based solutions.',
    icon: IconBrain,
  },
  {
    title: 'Web Development',
    text: 'Building responsive and user-friendly web applications.',
    icon: IconGlobe,
  },
  {
    title: 'Data Analytics',
    text: 'Turning raw data into useful insights and decisions.',
    icon: IconChart,
  },
  {
    title: 'Problem Solving',
    text: 'Applying logic and creativity to develop effective solutions.',
    icon: IconPuzzle,
  },
]

function IconBrain({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875v15.75c0 .621.504 1.125 1.125 1.125Z"
      />
    </svg>
  )
}

function IconGlobe({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .53-.05 1.053-.15 1.56M4.157 5.082A8.959 8.959 0 003 12c0 .53.05 1.053.15 1.56"
      />
    </svg>
  )
}

function IconChart({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
      />
    </svg>
  )
}

function IconPuzzle({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18v-4.25M8.25 18h7.5M9.75 3.75v1.5m4.5-1.5v1.5M12 5.25a4.125 4.125 0 1 0 0 8.25 4.125 4.125 0 0 0 0-8.25Z"
      />
    </svg>
  )
}

function AboutCard({ title, text, icon }) {
  const Icon = icon
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group flex flex-col rounded-2xl border border-[color:var(--border-color)] bg-[var(--surface-card)] p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:border-[#3b82f6]/35 hover:shadow-[0_12px_40px_-16px_rgb(59_130_246_/_0.25)]"
    >
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#3b82f6]/12 text-[#3b82f6] ring-1 ring-[#3b82f6]/25 transition group-hover:bg-[#3b82f6]/18">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-base font-semibold tracking-tight text-[var(--text-primary)]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{text}</p>
    </motion.article>
  )
}

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-b border-[color:var(--border-color)] bg-[var(--surface-section)] py-20 transition-colors duration-300 md:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle
          eyebrow="About"
          title="Background & focus"
          subtitle="Who I am, what I value, and the areas I invest my time in."
        />
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <motion.div
            id="about-heading"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            {ABOUT_BODY.map((para, i) => (
              <p
                key={i}
                className="text-base leading-[1.75] text-[var(--text-secondary)] md:text-[1.0625rem]"
              >
                {para}
              </p>
            ))}
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {CARDS.map((card) => (
              <AboutCard key={card.title} title={card.title} text={card.text} icon={card.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
