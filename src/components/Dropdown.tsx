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
  backgroundColor = "rgba(0, 0, 0, 0.9)",
  accentColor = "#dc267f",
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
      <button
        style={{
          background: isOpen
            ? `linear-gradient(45deg, ${accentColor}, rgba(255, 255, 255, 0.2))`
            : "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(15px)",
          color: "#ffffff",
          padding: "15px 25px",
          fontSize: "18px",
          border: `3px solid ${accentColor}`,
          borderRadius: "20px",
          cursor: "pointer",
          boxShadow: `0 12px 35px ${accentColor}50`,
          transition: "all 0.3s ease",
          fontWeight: "700",
          textShadow: `0 0 15px ${accentColor}`,
        }}
      >
        {title} ▼
      </button>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            background: "rgba(0, 0, 0, 0.95)",
            backdropFilter: "blur(25px)",
            minWidth: "220px",
            borderRadius: "20px",
            boxShadow: `0 20px 60px ${accentColor}80`,
            zIndex: 1000,
            border: `3px solid ${accentColor}`,
            marginTop: "8px",
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                padding: "15px 20px",
                color: "#ffffff",
                textDecoration: "none",
                display: "block",
                cursor: "pointer",
                transition: "all 0.3s ease",
                borderRadius:
                  index === 0
                    ? "18px 18px 0 0"
                    : index === items.length - 1
                    ? "0 0 18px 18px"
                    : "0",
                textShadow: `0 0 10px ${accentColor}`,
                fontSize: "16px",
                fontWeight: "500",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = accentColor;
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.textShadow =
                  "0 0 15px rgba(255, 255, 255, 0.8)";
                e.currentTarget.style.transform = "translateX(8px) scale(1.02)";
                e.currentTarget.style.fontWeight = "700";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.textShadow = `0 0 10px ${accentColor}`;
                e.currentTarget.style.transform = "translateX(0px) scale(1)";
                e.currentTarget.style.fontWeight = "500";
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
