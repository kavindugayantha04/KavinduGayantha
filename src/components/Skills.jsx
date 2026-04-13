import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'
import { SkillCategoryCard } from './SkillCategoryCard'
import { SKILL_GROUPS } from '../data/skills'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-b border-[color:var(--border-color)] bg-[var(--surface-main)] py-24 transition-colors duration-300 md:py-32"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div id="skills-heading" className="max-w-3xl">
          <SectionTitle
            eyebrow="Skills"
            title="Tools & Technologies"
            subtitle="A collection of technologies, tools, and concepts I use across development, data science, and project work."
          />
        </div>

        <motion.ul
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 xl:grid-cols-3 xl:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {SKILL_GROUPS.map((group) => (
            <motion.li key={group.title} variants={item} className="flex min-h-0">
              <SkillCategoryCard
                title={group.title}
                items={group.items}
                iconKey={group.iconKey}
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
