import React from "react";
import personalImage from "../assets/Vadank.jpeg";

const Header: React.FC = () => {
  return (
    <>
      {/* Space-themed Marquee Banner */}
      <div
        style={{
          background: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(15px)",
          margin: "0px",
          height: "50px",
          marginBottom: "30px",
          color: "#dc267f",
          marginTop: "20px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          borderRadius: "25px",
          display: "flex",
          alignItems: "center",
          boxShadow: "0 8px 25px rgba(220, 38, 127, 0.2)",
          border: "1px solid rgba(220, 38, 127, 0.3)",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "100%",
            animation: "scroll-left 25s linear infinite",
            fontSize: "18px",
            fontWeight: "600",
            letterSpacing: "2px",
            textShadow: "0 0 10px rgba(220, 38, 127, 0.8)",
          }}
        >
          🚀 Personal Desires: Teacher, Researcher, Entrepreneur! ⭐
        </div>
      </div>

      {/* Central Mind Map Node - Hero Section */}
      <div
        className="glass-card"
        style={{
          padding: "50px 40px",
          textAlign: "center",
          margin: "20px auto",
          maxWidth: "600px",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05) translateY(-10px)";
          e.currentTarget.style.boxShadow =
            "0 20px 60px rgba(120, 119, 198, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1) translateY(0px)";
          e.currentTarget.style.boxShadow =
            "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)";
        }}
      >
        {/* Animated background particles */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            background:
              "radial-gradient(circle at 30% 20%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)",
            animation: "pulse 4s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />

        <h1
          style={{
            color: "#ffffff",
            fontSize: "32px",
            marginBottom: "20px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontWeight: "300",
            letterSpacing: "3px",
            textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
            position: "relative",
            zIndex: 2,
          }}
        >
          Hello! 👋
        </h1>

        {/* Personal Image */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            marginBottom: "25px",
          }}
        >
          <img
            src={personalImage}
            alt="Vadank"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              border: "3px solid rgba(220, 38, 127, 0.6)",
              boxShadow:
                "0 0 30px rgba(220, 38, 127, 0.4), 0 0 60px rgba(255, 99, 71, 0.2)",
              transition: "all 0.3s ease",
              animation: "float 6s ease-in-out infinite",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1) rotate(5deg)";
              e.currentTarget.style.boxShadow =
                "0 0 40px rgba(220, 38, 127, 0.8), 0 0 80px rgba(255, 99, 71, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1) rotate(0deg)";
              e.currentTarget.style.boxShadow =
                "0 0 30px rgba(220, 38, 127, 0.4), 0 0 60px rgba(255, 99, 71, 0.2)";
            }}
          />
        </div>
        <h1
          style={{
            color: "#ffffff",
            fontSize: "36px",
            margin: "0",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontWeight: "600",
            position: "relative",
            zIndex: 2,
          }}
        >
          Creator{" "}
          <span
            style={{
              background: "linear-gradient(45deg, #dc267f, #ff6347, #191970)",
              backgroundSize: "200% 200%",
              animation: "gradient-shift 3s ease infinite",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              padding: "5px 15px",
              borderRadius: "25px",
              display: "inline-block",
              boxShadow: "0 0 30px rgba(220, 38, 127, 0.5)",
              border: "2px solid rgba(220, 38, 127, 0.3)",
              position: "relative",
            }}
          >
            Creator: Vadank
          </span>{" "}
          through your SCREEN!
        </h1>
      </div>
    </>
  );
};

export default Header;
