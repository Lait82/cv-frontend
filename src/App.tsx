import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ProjectsPage from "./pages/ProjectsPage"
import InterestsPage from "./pages/InterestsPage"
import ContactPage from "./pages/ContactPage"
import ApiDocsPage from "./pages/ApiDocsPage"
import NotFoundPage from "./pages/NotFoundPage"
import { ThemeProvider } from "./context/ThemeContext"
import "./styles/App.css"

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/interests" element={<InterestsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/api-docs" element={<ApiDocsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
