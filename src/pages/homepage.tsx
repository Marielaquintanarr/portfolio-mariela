import rocket from "../assets/rocket.png";
import star from "../assets/star.png";
import Socials from "../components/socials";
import '../App.css';
import { Link } from "react-router-dom";

export default function HomePage() {
    return(
        <>
            <div style={{marginLeft: "10%", marginTop: "5%"}}>
            <span style={{
                color: "white",
                fontFamily: "'Poppins', sans-serif",
                display: "flex",
                margin: 0
            }}>This is Mariela Quintanar De La Mora</span>
            <h1 style={{
                color: "white",
                fontFamily: "'exo 2', sans-serif",
                fontSize: "60px",
                margin: 0
            }}>Software</h1>
            <h1 style={{
                color: "white",
                fontFamily: "'exo 2', sans-serif",
                fontSize: "60px",
                margin: 0,
                marginBottom: "3%"
            }}>Engineer</h1>
            <Link to="/projects" style={{
                color: "#ffffff",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "14px",
                background: "linear-gradient(90deg, #7C02F5, #B517F5)",
                border: "none",
                borderRadius: "20px",
                justifyContent: "space-around",
                width: "20%",
                padding: "1%",
                cursor: "pointer",
                textDecoration: "none"
            }}>Projects</Link>

            <div style={{
                background:" #0D1A22",
                display: "flex",
                borderRadius: "20px",
                width: "35%",
                padding: "1%",
                marginTop: "5%",
                gap: "15%",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "5%"
                    }}>
                        <h1 style={{
                            fontSize: "48px",
                            color: "white",
                            fontFamily: "'Exo 2', sans-serif",
                            margin: 0
                        }}>2+</h1>
                        <img src={rocket} style={{
                            height: "40px",
                            width: "auto",
                            margin: 0
                        }} />
                    </div>
                    <span style={{
                        color: "white",
                        fontFamily: "'Poppins', sans-serif",
                    }}>Years of experience</span>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start"
                }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "5%"
                    }}>
                        <h1 style={{
                            fontSize: "48px",
                            color: "white",
                            fontFamily: "'Exo 2', sans-serif",
                            margin: 0
                        }}>5</h1>
                        <img src={star} style={{
                            height: "40px",
                            width: "auto",
                            margin: 0
                        }} />
                    </div>
                    <span style={{
                        color: "white",
                        fontFamily: "'Poppins', sans-serif",
                    }}>Incredible projects</span>
                </div>
            </div>
            <Socials />
        </div>
        </>
    )
}