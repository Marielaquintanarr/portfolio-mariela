import logo from "../assets/headerlogo.png";

export default function Header({ title }) {
    return (
      <>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start", 
            marginTop: "5%",
            marginBottom: "5%",
            gap: "3%"
          }}
        >
            <img src={logo} style={{ 
                width: "5%",     
                height: "auto",
                objectFit: "contain",
                display: "block", 
            }} />
            <p
                style={{
                color: "white",
                fontSize: "60px",
                margin: 0,
                fontFamily: "'Exo 2', sans-serif",
                fontWeight: "700"
                }}
            >
                {title}
            </p>
        </div>
      </>
    );
  }
  