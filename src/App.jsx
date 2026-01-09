import { useContext } from 'react'

import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contract'
import Footer from './components/Footer/Footer'
import './App.css'

import { ThemeContext } from './contexts/ThemeContext'

function App() {
  const { themeName } = useContext(ThemeContext)

  return (
    <div className={themeName}>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
