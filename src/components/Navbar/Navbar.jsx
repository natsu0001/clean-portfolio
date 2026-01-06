import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-header">
      <nav className="navbar">
        <h1 className="logo">grind</h1>

        
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

       
        <ul className={`nav-links ${open ? "open" : ""}`}>
          
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
