import { CursorGlow } from './components/CursorGlow.jsx'
import { Header } from './components/Header.jsx'
import { ScrollProgress } from './components/ScrollProgress.jsx'
import { Contact } from './sections/Contact.jsx'
import { Education } from './sections/Education.jsx'
import { Experience } from './sections/Experience.jsx'
import { Hero } from './sections/Hero.jsx'
import { Projects } from './sections/Projects.jsx'
import { Skills } from './sections/Skills.jsx'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-ink text-paper selection:bg-acid selection:text-ink">
      <ScrollProgress />
      <CursorGlow />
      <Header />
      <main id="main-content">
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
