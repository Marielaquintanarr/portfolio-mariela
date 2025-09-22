import '../App.css';
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
        <div style={{marginLeft: "10%", marginRight: "10%", marginTop: "5%"}}>
            <div style={{
                backgroundColor: "rgba(255, 255, 255, 0.36)",
                fontFamily: 'Poppins',
                alignItems: "center",
                justifyContent: "space-around",
                display: "flex",
                height: "60px",
                alignContent: "center",
                borderRadius: "10px",
            }}>
                <img src={logo} style={{
                    width: "8%",
                    height: "auto",
                }} />
                <nav style={{display: "flex", gap: "20px"}}>
                    <Link to="/" style={{textDecoration: "none", color: "white"}}>
                        Home
                    </Link>
                    <Link to="/projects" style={{textDecoration: "none", color: "white"}}>
                        Projects
                    </Link>
                    <Link to="/skills" style={{textDecoration: "none", color: "white"}}>
                        My Skills
                    </Link>
                    <Link to="/experience" style={{textDecoration: "none", color: "white"}}>
                        Experience
                    </Link>
                </nav>
                <a href="https://www.linkedin.com/in/marielaquintanar13b41248/">
                    <button id="hire" style={{
                        background: "linear-gradient(90deg, #7C02F5, #B517F5)",
                        left: "auto",
                        color: "#ffffff",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                        border: "none",
                        borderRadius: "15px",
                        justifyContent: "space-around",
                        width: "150%",
                        padding: "1%",
                        cursor: "pointer"
                    }}>Hire me</button>
                </a>
            </div>
        </div>
    </>
  )
}

