import React from "react";
import pdf from "../assets/CV_Mariela_Quintanar_De_La_Mora.pdf";

export default function ButtonPDF() {
  return (
    <button
      onClick={() => {
        const link = document.createElement("a");
        link.href = pdf; 
        link.download = "CV_Mariela_Quintanar_De_La_Mora.pdf"; 
        link.click();
      }}
      style={{
        padding: "10px 20px",
        backgroundColor: "white",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      CV
    </button>
  );
}
