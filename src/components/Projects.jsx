import { useState } from 'react'
import { motion } from 'framer-motion'
import { createPortal } from 'react-dom'
import { SectionTitle } from './SectionTitle'
import { PROJECTS } from '../data/projects'
import { ProjectModal } from './ProjectModal'

const btnClass =
  'inline-flex h-9 min-h-9 shrink-0 items-center justify-center rounded-lg px-3.5 text-xs transition'

function ProjectCard({ project, onOpen }) {
  const showGithub = !project.hideGithub && project.githubUrl
  const showLive = Boolean(project.liveUrl)

  return (
    <motion.article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[color:var(--border-color)] bg-[var(--surface-card)] p-6 shadow-[var(--shadow-card)] transition hover:border-[#3b82f6]/35 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.12)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: 'radial-gradient(120% 80% at 100% 0%, rgba(59,130,246,0.12), transparent 50%)' }}
      />
      <h3 className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li key={t}>
            <span className="rounded-md border border-[color:var(--border-color)] bg-[var(--surface-subtle)] px-2 py-0.5 text-xs font-medium text-[var(--text-secondary)]">
              {t}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-7 flex flex-wrap items-center gap-2.5">
        {showGithub ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            className={`${btnClass} bg-[var(--surface-muted)] font-semibold text-[var(--text-primary)] ring-1 ring-[color:var(--border-color)] hover:opacity-90`}
            onClick={(e) => e.stopPropagation()}
          >
            GitHub
          </a>
        ) : null}
        {showLive ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer noopener"
            className={`${btnClass} border border-[color:var(--border-strong)] font-medium text-[var(--text-secondary)] hover:bg-[var(--nav-pill)]`}
            onClick={(e) => e.stopPropagation()}
          >
            Live Demo
          </a>
        ) : null}
        <button
          type="button"
          onClick={() => onOpen(project)}
          className={`${btnClass} font-medium text-[#3b82f6] hover:bg-[#3b82f6]/10 hover:text-[#2563eb]`}
        >
          Details
        </button>
      </div>
    </motion.article>
  )
}

export function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-b border-[color:var(--border-color)] bg-[var(--surface-section)] py-20 transition-colors duration-300 md:py-28"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div id="projects-heading">
          <SectionTitle
            eyebrow="Projects"
            title="Selected work"
            subtitle="A mix of web systems, ML prototypes, and hardware—each built to solve a concrete problem."
          />
        </div>
        <div className="relative grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <div key={p.id} className="relative">
              <ProjectCard project={p} onOpen={setSelected} />
            </div>
          ))}
        </div>
      </div>
      {typeof document !== 'undefined' &&
        createPortal(<ProjectModal project={selected} onClose={() => setSelected(null)} />, document.body)}
    </section>
  )
}
