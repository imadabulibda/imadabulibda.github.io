import { Header } from './components/Header.jsx'
import { Hero } from './components/Hero.jsx'
import { About } from './components/About.jsx'
import { Capabilities } from './components/Capabilities.jsx'
import { Experience } from './components/Experience.jsx'
import { Education } from './components/Education.jsx'
import { Skills } from './components/Skills.jsx'
import { Languages } from './components/Languages.jsx'
import { Footer } from './components/Footer.jsx'
import { useOverscrollLock } from './hooks/useOverscrollLock.js'

export default function App() {
  useOverscrollLock()

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Experience />
        <Education />
        <Skills />
        <Languages />
      </main>
      <Footer />
    </div>
  )
}
