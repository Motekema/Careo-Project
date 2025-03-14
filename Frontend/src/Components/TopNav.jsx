import React from "react";

function TopNav() {
  return (
    <nav
      className="top-nav"
      style={{
        position: "fixed", // Make the nav fixed at the top
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "#f8f9fa", // Light grey background
        padding: "10px 20px", // Add horizontal padding
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
        zIndex: 1000, // Ensure it is above other elements
      }}
    >
      <div
        className="nav-item"
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        <span
          style={{
            color: "#333",
            fontSize: "18px",
            fontWeight: "bold",
            whiteSpace: "nowrap", // Prevent text from wrapping
          }}
        >
          Put Forward
        </span>
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
          4
        </div>
      </div>
      <button
        className="nav-button"
        style={{
          backgroundColor: "#007bff", // Blue color
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "8px 16px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
          transition: "background-color 0.3s ease, transform 0.2s ease", // Smooth transitions
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#0056b3"; // Darker blue on hover
          e.target.style.transform = "scale(1.05)"; // Slightly enlarge on hover
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "#007bff"; // Original blue on mouse out
          e.target.style.transform = "scale(1)"; // Reset size
        }}
        onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")} // Shrink on click
        onMouseUp={(e) => (e.target.style.transform = "scale(1.05)")} // Return to hover size
      >
        +
      </button>

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 768px) {
            .top-nav {
              padding: 10px 15px; // Reduce padding on smaller screens
            }
            .nav-item span {
              font-size: 16px; // Smaller font size for mobile
            }
            .nav-button {
              padding: 6px 12px; // Smaller button on mobile
              font-size: 14px;
            }
          }
          @media (max-width: 480px) {
            .top-nav {
              padding: 10px 10px; // Minimal padding for very small screens
            }
            .nav-item span {
              font-size: 14px; // Even smaller font size
            }
            .nav-button {
              padding: 5px 10px; // Compact button
              font-size: 12px;
            }
          }
        `}
      </style>
    </nav>
  );
}

export default TopNav;
