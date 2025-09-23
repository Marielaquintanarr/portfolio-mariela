import SkillCard from "../components/SkillCard";
import Header from "../components/TitleHeader";
export default function Skills() {
    return (
        <>
            <div className="skills-container">
                <Header title="Skills"/>
                <div className="skills-description">
                    <span className="description-text">In this section,</span> <span className="description-highlight"> you'll find my top skills </span> <span className="description-text">, developed through </span> <span className="description-highlight">years of experience </span> <span className="description-highlight">and</span><span className="description-highlight"> constant learning.</span><span className="description-text"> These abilities allow me to deliver </span> <span className="description-highlight"> quality results </span><span className="description-text">and add value to every project.</span>
                </div>
                <div className="skills-grid">
                    <SkillCard title="TECH SKILLS" text="Proficiency in Python and Javascript" text2="Web dev (Frontend/Backend) with React" text3="DB management with SQL and NoSQL" />
                    <SkillCard title="LIFE SKILLS" text="Team Player" text2="Problem-solving skills" text3="Collaborates effectively with stakeholders" />
                    <SkillCard title="LANGUAGES"  text="English (Advanced)" text2="Spanish (Native)" text3="French (Amateur)"/>
                </div>
            </div>
        </>
    )
}