import { motion, AnimatePresence } from 'framer-motion'

export function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence mode="wait">
      {project ? (
        <motion.div
          key={project.id}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/65 backdrop-blur-sm"
            aria-label="Close project details"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-[color:var(--border-color)] bg-[var(--surface-card)] p-6 shadow-2xl transition-colors duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h2 id="project-modal-title" className="text-lg font-semibold text-[var(--text-primary)]">
                {project.title}
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-1.5 text-[var(--text-muted)] transition hover:bg-[var(--nav-pill)] hover:text-[var(--text-primary)]"
                aria-label="Close"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li key={t}>
                  <span className="rounded-md bg-[var(--surface-subtle)] px-2 py-0.5 text-xs font-medium text-[var(--text-secondary)]">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-[var(--text-muted)]">{project.details}</p>
            {(!project.hideGithub && project.githubUrl) || project.liveUrl ? (
              <div className="mt-7 flex flex-wrap items-center gap-3">
                {!project.hideGithub && project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex h-10 min-h-10 items-center justify-center rounded-lg bg-[#3b82f6] px-4 text-sm font-semibold text-white transition hover:bg-[#2563eb]"
                  >
                    View on GitHub
                  </a>
                ) : null}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex h-10 min-h-10 items-center justify-center rounded-lg border border-[color:var(--border-strong)] px-4 text-sm font-medium text-[var(--text-secondary)] transition hover:bg-[var(--nav-pill)]"
                  >
                    Live demo
                  </a>
                ) : null}
              </div>
            ) : null}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
