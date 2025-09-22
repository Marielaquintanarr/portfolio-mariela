import email from "../assets/email_logo.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github_black_logo.png";

export default function Socials() {
    return(
        <>
            <div style={{
                position: "fixed",
                right: "140px",    
                top: "50%",
                transform: "translateY(-50%)",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
            }}>
                <a href="https://mail.google.com/mail/u/0/?pli=1#inbox">
                    <button id="email">
                        <img src={email} alt="Email" />
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/marielaquintanar13b41248/">
                    <button id="linkedin">
                        <img src={linkedin} alt="LinkedIn" />
                    </button>
                </a>
                <a href="https://github.com/Marielaquintanar">
                    <button id="github">
                        <img src={github} alt="GitHub" />
                    </button>
                </a>
            </div> 
        </>
    )
}