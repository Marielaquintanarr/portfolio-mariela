import rocket from "../assets/rocket.png";
import star from "../assets/star.png";
import Socials from "../components/SocialBar";
import '../App.css';
import { Link } from "react-router-dom";

export default function Homepage() {
    return(
        <>
            <div className="homepage-container">
                <div className="hero-section">
                    <span className="intro-text">This is Mariela Quintanar De La Mora</span>
                    <h1 className="title-software">Software</h1>
                    <h1 className="title-engineer">Engineer</h1>
                    <Link to="/projects" className="projects-button">Projects</Link>
                </div>

                <div className="stats-container">
                    <div className="stat-item">
                        <div className="stat-header">
                            <h1 className="stat-number">2+</h1>
                            <img src={rocket} className="stat-icon" alt="Rocket icon" />
                        </div>
                        <span className="stat-text">Years of experience</span>
                    </div>
                    <div className="stat-item">
                        <div className="stat-header">
                            <h1 className="stat-number">5</h1>
                            <img src={star} className="stat-icon" alt="Star icon" />
                        </div>
                        <span className="stat-text">Incredible projects</span>
                    </div>
                </div>
                <Socials />
            </div>
        </>
    )
}