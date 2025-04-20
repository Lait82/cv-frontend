"use client"

import type React from "react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
// import { useTheme } from "../context/ThemeContext"
import "../styles/Navbar.css"

const Navbar: React.FC = () => {
  // const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path: string) => {
    return location.pathname === path ? "active" : ""
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="pixel-avatar"></div>
          <span style={{fontWeight:"bold"}}>Manuel Exposito._</span>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${isActive("/")}`} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${isActive("/about")}`} onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className={`nav-link ${isActive("/projects")}`} onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/interests" className={`nav-link ${isActive("/interests")}`} onClick={closeMenu}>
              Interests
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-link ${isActive("/contact")}`} onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/api-docs" className={`nav-link ${isActive("/api-docs")}`} onClick={closeMenu}>
              API Docs
            </Link>
          </li>
          {/* <li className="nav-item">
            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </li> */}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
