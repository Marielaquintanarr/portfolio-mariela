
export default function Card({ image, title, text, link }) {
    return(
        <>
        <div style={{
            backgroundColor: "#0d1117", 
            width: "360px",
            height: "330px",
            borderRadius: "20px",
            color: "white"
        }}>
            <img src={image} style={{
                width: "360px",
                height: "200px",
                borderRadius: "15px",
            }} />
            <div style={{display: "flex", gap: "10%", justifyContent: "center", marginTop: "7%"}}>
                <div style={{
                    fontFamily: "Poppins, sans-serif",
                }}>
                    <p style={{
                        fontSize: "25px",
                        fontWeight: "900",
                        margin: 0
                    }}>{title}</p>
                    <p style={{
                        fontSize: "15px", 
                        margin: 0
                    }}>{text}</p>
                </div>
                <a href="https://github.com" target="_blank">
                    <div style={{
                        background: "linear-gradient(to right, #570A70, #260B74)",
                        borderRadius: "15px",
                        cursor: "pointer",
                        color: "white",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "10px",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        Github
                    </div>
                </a>
            </div>
        </div>
        </>
    )
}