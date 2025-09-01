import React from "react";

function SavingsHeader({ savingsTotal }) {
  return (
    <div style={{
      width: "100%",
      background: "#4f8df5",
      color: "#fff",
      padding: "48px 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
      borderRadius: "0 0 32px 32px"
    }}>
      <span style={{ fontSize: "3rem", fontWeight: "bold", letterSpacing: "2px" }}>
        Savings
      </span>
      <div style={{
        marginTop: "24px",
        fontSize: "2.5rem",
        fontWeight: "bold",
        background: "#fff",
        color: "#4f8df5",
        borderRadius: "16px",
        padding: "24px 64px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.10)"
      }}>
        ₹{savingsTotal}
      </div>
    </div>
  );
}

export default SavingsHeader;
