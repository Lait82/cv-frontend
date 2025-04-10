import type React from "react"
import { Link } from "react-router-dom"
import "./Header.css"
import avatarImage from "../assets/avatar.jpg" // Importamos la imagen directamente

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <div className="avatar" style={{ backgroundImage: `url(${avatarImage})` }}></div>
          <span>Mi CV</span>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">
            Inicio
          </Link>
          <Link to="/about" className="nav-link">
            Sobre Mí
          </Link>
          <Link to="/projects" className="nav-link">
            Proyectos
          </Link>
          <Link to="/contact" className="nav-link">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
