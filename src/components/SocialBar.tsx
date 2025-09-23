import email from "../assets/email_logo.png";
import linkedin from "../assets/linkedin_logo.png";
import github from "../assets/github_logo.png";

export default function SocialBar() {
    return(
        <>
            <div className="socials-desktop">
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
            <div className="socials-mobile">
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