import { useState } from "react";

function ExperienceTabs() {
  const [activeTab, setActiveTab] = useState("first");

  const tabs = [
    { key: "first", label: "Datadog" },
    { key: "second", label: "Oracle" },
    { key: "third", label: "Grupo Luthe" },
  ];

  return (
    <div
      style={{
        display: "flex",
        padding: "5%",
        borderRadius: "10px",
        alignItems: "flex-start", 
        backgroundColor: "#0d1117", 
      }}
    >
      {/* Sidebar (Tabs) */}
      <div
        style={{
          width: "220px",
          marginRight: "40px",
          fontFamily: "'Exo 2', sans-serif",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              display: "block",
              width: "100%",
              padding: "14px 16px",
              marginBottom: "12px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              textAlign: "center",
              fontFamily: "'Exo 2', sans-serif",
              fontSize: "16px",
              fontWeight: activeTab === tab.key ? "bold" : "normal",
              background: activeTab === tab.key 
                ? "linear-gradient(90deg, #7C02F5, #B517F5)" 
                : "white",
              color: activeTab === tab.key ? "white" : "black",
              transition: "all 0.2s ease-in-out",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div
        style={{
          flex: 1,
          color: "white",
          fontFamily: "'Exo 2', sans-serif",
        }}
      >
        {activeTab === "first" && (
          <div>
            <div style={{ display: "flex", gap: "8px", marginBottom: "4px", }}>
              <h1 style={{ margin: 0 }}>Engineer</h1>
              <h1 style={{ margin: 0, color: "#B517F5" }}>@ Datadog</h1>
            </div>
            <p style={{ marginTop: 0, marginBottom: "12px",}}>
              June 2025 - August 2025
            </p>
            <ul style={{ marginTop: 0,listStyleType: "disc"}}>
              <li style={{ marginBottom: "10px", fontFamily: "'Poppins', sans-serif"}}>Designed a unified query view in Database Monitoring to quickly identify critical queries across hosts.</li>
              <li style={{ marginBottom: "10px", fontFamily: "'Poppins', sans-serif"}}>Enhanced team efficiency by exposing key metrics (e.g., execution count, duration, plan flips) through scalable filtering, improving prioritization and performance analysis.</li>
            </ul>
          </div>
        )}

        {activeTab === "second" && (
            <div>
                <div style={{ display: "flex", gap: "8px", marginBottom: "4px" }}>
                <h1 style={{ margin: 0 }}>Engineer</h1>
                <h1 style={{ margin: 0, color: "#B517F5" }}>@ Oracle</h1>
                </div>
                <p style={{ marginTop: 0, marginBottom: "12px" }}>
                June 2024 - March 2025
                </p>
                <ul style={{ marginTop: 0,listStyleType: "disc"}}>
                <li style={{ marginBottom: "10px", fontFamily: "'Poppins', sans-serif"}}>Developed an Oracle tools application, reducing search time by 80%. Previously, engineers navigated multiple pages,
                taking 2-5 minutes on average.</li>
                <li style={{ marginBottom: "10px", fontFamily: "'Poppins', sans-serif"}}>Implemented a global support contact page, reducing search time by 10–15 minutes and improving weekend availability.</li>
                </ul>
            </div>
        )}

        {activeTab === "third" && (
            <div>
                <div style={{ display: "flex", gap: "8px", marginBottom: "4px" }}>
                <h1 style={{ margin: 0 }}>Engineer</h1>
                <h1 style={{ margin: 0, color: "#B517F5" }}>@ Grupo Luthe</h1>
                </div>
                <p style={{ marginTop: 0, marginBottom: "12px" }}>
                February 2023 - January 2024
                </p>
                <ul style={{ marginTop: 0,listStyleType: "disc"}}>
                <li style={{ marginBottom: "10px", fontFamily: "'Poppins', sans-serif"}}>Developed administrative Oracle APEX pages for small businesses, streamlining daily operations and improving efficiency.</li>
                <li style={{ marginBottom: "10px", fontFamily: "'Poppins', sans-serif"}}>Assisted in migrating applications to a new Oracle APEX version, ensuring smooth transition and minimal downtime.s</li>
                </ul>
            </div>
        )}
      </div>
    </div>
  );
}

export default ExperienceTabs;
