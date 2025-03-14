import React from "react";

function TopNav() {
  return (
    <nav
      className="top-nav"
      style={{
        position: "fixed", // Make the nav fixed at the top
        top: 0,
        width: "100%",
        backgroundColor: "white", // Background set to white
        padding: "10px",
        borderRadius: "5px",
        display: "flex",
        marginBottom: "10px",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Optional: Add a subtle shadow for better visibility
        zIndex: 1000, // Ensure it is above other elements
      }}
    >
      <div
        className="nav-item"
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        <span style={{ color: "#333", fontSize: "18px" }}>Put Forward</span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            border: "2px solid green",
            color: "green",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          3
        </div>
      </div>
      <button
        className="nav-button"
        style={{
          backgroundColor: "#555",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
        +
      </button>
    </nav>
  );
}

export default TopNav;
