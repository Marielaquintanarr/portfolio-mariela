import SkillCard from "../components/skillCard";
import Header from "../components/header";
export default function Skills() {
    return (
        <>
            <div style={{marginLeft: "10%", marginRight: "10%", marginBottom: "10%"}}>
                <Header title="Skills"/>
            <div style={{marginRight: "40%"}}>
                <span style={{
                    fontFamily: "'Poppins', sans-serif",
                    color: "white",
                    fontSize: "20px"}}>In this section,</span> <span style={{
                    fontFamily: "'Poppins', sans-serif",
                    color: "#7C02F5",
                    fontSize: "20px"
                }}> you'll find my top skills </span> <span style={{
                    fontFamily: "'Poppins', sans-serif",
                    color: "white",
                    fontSize: "20px",
                }}>, developed through </span> <span style={{
                    fontFamily: "'Poppins', sans-serif",
                    color: "#7C02F5",
                    fontSize: "20px"
                }}>years of experience </span> <span style={{
                    fontFamily: "'Poppins', sans-serif",
                    color: "#7C02F5",
                    fontSize: "20px"}}>and</span><span style={{
                        fontFamily: "'Poppins', sans-serif",
                        color: "#7C02F5",
                        fontSize: "20px"
                    }}> constant learning.</span><span style={{
                        fontFamily: "'Poppins', sans-serif",
                        color: "white",
                        fontSize: "20px",
                    }}> These abilities allow me to deliver </span> <span style={{
                        fontFamily: "'Poppins', sans-serif",
                        color: "#7C02F5",
                        fontSize: "20px"
                    }}> quality results </span><span style={{
                        fontFamily: "'Poppins', sans-serif",
                        color: "white",
                        fontSize: "20px",
                    }}>and add value to every project.</span>
            </div>
                <div
                    style={{
                        width: "100%",
                        marginTop: "5%",
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)", 
                        justifyContent: "center",
                        gap: "40px"
                    }}
                >
                    <SkillCard title="TECH SKILLS" text="Proficiency in Python and Javascript" text2="Web dev (Frontend/Backend) with React" text3="DB management with SQL and NoSQL" />
                    <SkillCard title="LIFE SKILLS" text="Team Player" text2="Problem-solving skills" text3="Collaborates effectively with stakeholders" />
                    <SkillCard title="LANGUAGES"  text="English (Advanced)" text2="Spanish (Native)" text3="French (Amateur)"/>
                </div>
            </div>
        </>
    )
}