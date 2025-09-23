import './App.css'
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import Projects from './pages/ProjectsPage';
import Skills from './pages/SkillsPage';
import Experience from './pages/ExperiencePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
        <Router>
          <Navbar /> 
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </Router>
    </>
  )
}

