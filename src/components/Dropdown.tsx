import React, { useState } from "react";

interface DropdownProps {
  title: string;
  items: string[];
  backgroundColor?: string;
  accentColor?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  title,
  items,
  backgroundColor = "rgba(0, 0, 0, 0.3)",
  accentColor = "#00ffff",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="dropdown"
      style={{
        position: "relative",
        display: "inline-block",
        margin: "0 10px",
      }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Dropdown Button */}
      <button
        style={{
          background: isOpen
            ? `linear-gradient(45deg, ${accentColor}, rgba(255, 255, 255, 0.1))`
            : "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(15px)",
          color: isOpen ? "#000000" : accentColor,
          padding: "12px 20px",
          fontSize: "16px",
          border: `1px solid ${accentColor}`,
          borderRadius: "15px",
          cursor: "pointer",
          boxShadow: `0 8px 25px rgba(${
            accentColor === "#00ffff" ? "0, 255, 255" : "255, 0, 255"
          }, 0.3)`,
          transition: "all 0.3s ease",
          fontWeight: "500",
          textShadow: isOpen ? "none" : `0 0 10px ${accentColor}`,
        }}
      >
        {title} ▼
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            background: backgroundColor,
            backdropFilter: "blur(15px)",
            minWidth: "180px",
            borderRadius: "15px",
            boxShadow: `0 15px 35px rgba(${
              accentColor === "#00ffff" ? "0, 255, 255" : "255, 0, 255"
            }, 0.4)`,
            zIndex: 1000,
            border: `1px solid ${accentColor}`,
            marginTop: "5px",
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                padding: "12px 16px",
                color: "#ffffff",
                textDecoration: "none",
                display: "block",
                cursor: "pointer",
                transition: "all 0.3s ease",
                borderRadius:
                  index === 0
                    ? "15px 15px 0 0"
                    : index === items.length - 1
                    ? "0 0 15px 15px"
                    : "0",
                textShadow: `0 0 8px ${accentColor}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = accentColor;
                e.currentTarget.style.color = "#000000";
                e.currentTarget.style.textShadow = "none";
                e.currentTarget.style.transform = "translateX(5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.textShadow = `0 0 8px ${accentColor}`;
                e.currentTarget.style.transform = "translateX(0px)";
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
