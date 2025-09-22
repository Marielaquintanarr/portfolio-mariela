export default function SkillCard( {title, text, text2, text3}) {
    return (
        <>
        <div style={{
            backgroundColor: "#0d1117", 
            width: "360px",
            height: "270px",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "10px",
            flexDirection: "column",
            fontFamily: 'Poppins',
            textAlign: "center"
            }}>
                <h1 style={{
                    fontFamily: "'Exo 2', sans-serif", 
                    fontSize: "40px",
                    color: "#7C02F5",
                    WebkitTextStrokeWidth: "0.5px",
                    WebkitTextStrokeColor: "#7C02F5",
                    fontWeight: 800,
                    margin: "10px"
                }}>{title}</h1>
                <li style={{
                        color: "white",
                        margin: "10px"
                }}>{text}</li>
                <li style={{
                    color: "white",
                    margin: "10px"
                }}>{text2}</li>
                <li style={{
                    color: "white",
                    margin: "10px"
                }}>{text3}</li>
            </div>
        </>
    )
}