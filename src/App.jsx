import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Education } from './components/Education'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useActiveSection } from './hooks/useActiveSection'

export default function App() {
  const activeId = useActiveSection()

  return (
    <div className="min-h-svh bg-[var(--surface-main)] text-[var(--text-primary)] antialiased transition-colors duration-300">
      <Navbar activeId={activeId} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
