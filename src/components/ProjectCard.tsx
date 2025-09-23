
interface CardProps {
    image: string;
    title: string;
    text: string;
    link: string;
}

export default function ProjectCard({ image, title, text, link }: CardProps) {
    return(
        <>
        <div className="card">
            <img src={image} className="card-image" alt={title} />
            <div className="card-content">
                <div className="card-text">
                    <p className="card-title">{title}</p>
                    <p className="card-description">{text}</p>
                </div>
                <a href={link} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
                    <div className="card-github-button">
                        Github
                    </div>
                </a>
            </div>
        </div>
        </>
    )
}