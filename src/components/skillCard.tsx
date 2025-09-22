interface SkillCardProps {
    title: string;
    text: string;
    text2: string;
    text3: string;
}

export default function SkillCard({ title, text, text2, text3 }: SkillCardProps) {
    return (
        <>
        <div className="skill-card">
            <h1 className="skill-card-title">{title}</h1>
            <ul className="skill-card-list">
                <li className="skill-card-item">{text}</li>
                <li className="skill-card-item">{text2}</li>
                <li className="skill-card-item">{text3}</li>
            </ul>
        </div>
        </>
    )
}