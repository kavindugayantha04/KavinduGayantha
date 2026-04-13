import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { SITE } from '../config/site'

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

const HERO_DESCRIPTION =
  'I am passionate about building data-driven applications and exploring machine learning to create practical, real-world solutions. I enjoy combining technical skills with creativity and continuous learning to develop meaningful systems that solve real problems.'

export function Hero() {
  const [splash, setSplash] = useState(true)
  const [nameSettled, setNameSettled] = useState(false)
  const nameAnimLock = useRef(false)

  useEffect(() => {
    const t = setTimeout(() => setSplash(false), 520)
    return () => clearTimeout(t)
  }, [])

  return (
    <LayoutGroup>
      <section
        id="home"
        className="relative overflow-hidden border-b border-[color:var(--border-color)] bg-[var(--surface-main)] pt-[4.5rem] pb-16 transition-colors duration-300 md:pb-24"
        aria-label="Introduction"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-300"
          style={{ background: 'var(--hero-glow)' }}
        />

        <AnimatePresence mode="popLayout">
          {splash ? (
            <motion.div
              key="splash"
              role="presentation"
              className="fixed inset-0 z-40 flex items-center justify-center bg-[var(--surface-main)] transition-colors duration-300"
            >
              <motion.h1
                layoutId="hero-name"
                transition={{ layout: { duration: 1.05, ease: [0.16, 1, 0.3, 1] } }}
                className="max-w-[95vw] text-center text-[clamp(2.25rem,10vw,4.5rem)] font-bold tracking-tight text-[var(--text-primary)]"
                style={{ textWrap: 'balance' }}
              >
                {SITE.name}
              </motion.h1>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <div className="relative z-10 mx-auto grid max-w-6xl min-h-[calc(100svh-5.5rem)] grid-cols-1 items-center gap-10 px-4 md:grid-cols-12 md:gap-12 md:px-6">
          <div className="md:col-span-7">
            {!splash ? (
              <>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={nameSettled ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-2 text-sm font-medium tracking-wide text-[var(--text-muted)]"
                >
                  Hi, I&apos;m
                </motion.p>
                <motion.h1
                  layoutId="hero-name"
                  layout="position"
                  onLayoutAnimationComplete={() => {
                    if (nameAnimLock.current) return
                    nameAnimLock.current = true
                    setNameSettled(true)
                  }}
                  transition={{ layout: { duration: 1.05, ease: [0.16, 1, 0.3, 1] } }}
                  className="text-[clamp(2.35rem,5vw,3.85rem)] font-bold leading-[1.12] tracking-tight text-[var(--text-primary)]"
                  style={{ textWrap: 'balance' }}
                >
                  {SITE.name}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={nameSettled ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                  transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-6 max-w-2xl text-base leading-[1.75] text-[var(--text-secondary)] md:text-[1.0625rem]"
                >
                  {HERO_DESCRIPTION}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={nameSettled ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                  transition={{ duration: 0.45, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-8 flex flex-wrap items-center gap-3"
                >
                  <a
                    href="https://github.com/kavindugayantha04"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[color:var(--border-color)] bg-[var(--surface-card)] px-4 text-sm font-medium text-[var(--text-secondary)] shadow-[var(--shadow-card)] transition hover:border-[#3b82f6]/40 hover:bg-[var(--surface-muted)]"
                  >
                    <GitHubIcon className="h-5 w-5" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kavindu-gayantha-02963931b"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[color:var(--border-color)] bg-[var(--surface-card)] px-4 text-sm font-medium text-[var(--text-secondary)] shadow-[var(--shadow-card)] transition hover:border-[#3b82f6]/40 hover:bg-[var(--surface-muted)]"
                  >
                    <LinkedInIcon className="h-5 w-5" />
                    LinkedIn
                  </a>
                  <a
                    href="/Kavindu_Gayantha_CV1.pdf"
                    download
                    className="inline-flex h-11 items-center justify-center rounded-xl bg-[#3b82f6] px-5 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(59,130,246,0.3)] transition hover:bg-[#2563eb]"
                  >
                    Download CV
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex h-11 items-center justify-center rounded-xl border border-[color:var(--border-strong)] bg-transparent px-5 text-sm font-medium text-[var(--text-secondary)] transition hover:bg-[var(--nav-pill)]"
                  >
                    Contact Me
                  </a>
                </motion.div>
              </>
            ) : null}
          </div>

          <motion.div
            className="relative mx-auto flex w-full max-w-[280px] justify-center sm:max-w-[300px] md:col-span-5 md:max-w-none md:justify-end"
            initial={false}
            animate={!splash && nameSettled ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-full border-2 border-[color:var(--border-color)] bg-[var(--surface-card)] shadow-[0_0_0_1px_rgb(59_130_246_/_0.15),0_0_48px_-8px_rgb(59_130_246_/_0.35),var(--shadow-card)] sm:max-w-[300px] md:max-w-[min(100%,360px)]"
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-full opacity-50"
                style={{
                  background:
                    'linear-gradient(135deg, rgb(59 130 246 / 0.2), transparent 50%, rgb(59 130 246 / 0.06))',
                }}
              />
              <img
                src={SITE.profileImage}
                alt="Kavindu Gayantha"
                className="relative h-full w-full object-cover"
                width={480}
                height={480}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </LayoutGroup>
  )
}
