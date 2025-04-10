import type React from "react"
import "./Footer.css"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} - Manuel Exposito API CV</p>
        <div className="social-links">
          <a href="https://github.com/Lait82" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/manuel-exposito" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
