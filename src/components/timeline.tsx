import React from "react";

type TimelineItem = {
  year: string;
  text: string;
};

const items: TimelineItem[] = [
  { year: "2020", text: "Inicié la universidad" },
  { year: "2022", text: "Primer proyecto en React" },
  { year: "2023", text: "Prácticas profesionales" },
  { year: "2025", text: "Graduación 🎓" },
];

const Timeline: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        margin: "2rem auto",
        padding: "1rem",
        maxWidth: "600px",
        borderLeft: "2px solid #ccc",
      }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            position: "relative",
            margin: "1.5rem 0",
            paddingLeft: "2rem",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "-10px",
              top: "0.5rem",
              width: "16px",
              height: "16px",
              backgroundColor: "#2563eb",
              borderRadius: "50%",
              border: "2px solid white",
            }}
          ></div>

          <div
            style={{
              background: "#f9f9f9",
              padding: "1rem",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                color: "#2563eb",
                display: "block",
                marginBottom: "0.5rem",
              }}
            >
              {item.year}
            </span>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
