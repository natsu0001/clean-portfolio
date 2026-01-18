import { useState, useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import "./Navbar.css"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { themeName, toggleTheme } = useContext(ThemeContext)

  return (
    <header className={`nav-header ${themeName}`}>
      <nav className="navbar">
        <h1 className="logo"></h1>

        
        <div className="nav-actions">
        
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {themeName === "dark" ? "🌙" : "☀️"}
          </button>

         
          <button
            className="hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><a href="#dashboard" onClick={() => setOpen(false)}>Dashboard</a></li>
          <li><a href="#blog" onClick={() => setOpen(false)}>Blog</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>

          
        </div>

   
        
      </nav>
    </header>
  )
}
