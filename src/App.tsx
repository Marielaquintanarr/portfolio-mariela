import './App.css'
import Navbar from './components/navbar';
import HomePage from './pages/homepage';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Experience from './pages/experience';
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

