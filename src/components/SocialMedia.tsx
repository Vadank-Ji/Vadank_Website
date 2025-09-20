import React from "react";

const SocialMedia: React.FC = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Vadank-Ji",
      icon: "🐙",
      color: "#dc267f",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vadankji?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: "💼",
      color: "#0077b5",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/vadank",
      icon: "🐦",
      color: "#1da1f2",
    },
    {
      name: "Email",
      url: "mailto:vadank0806@gmail.com",
      icon: "📧",
      color: "#ff6347",
    },
  ];

  return (
    <div
      className="glass-card"
      style={{
        padding: "30px",
        maxWidth: "350px",
        position: "relative",
        overflow: "hidden",
        animation: "float 7s ease-in-out infinite",
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
            "radial-gradient(circle at 40% 30%, rgba(255, 99, 71, 0.1) 0%, transparent 50%), radial-gradient(circle at 60% 70%, rgba(220, 38, 127, 0.1) 0%, transparent 50%)",
          animation: "pulse 6s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "15px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
              padding: "15px 10px",
              background: `rgba(${
                social.color === "#00ffff"
                  ? "0, 255, 255"
                  : social.color === "#ff00ff"
                  ? "255, 0, 255"
                  : "255, 255, 255"
              }, 0.1)`,
              backdropFilter: "blur(10px)",
              borderRadius: "15px",
              border: `1px solid ${social.color}`,
              color: social.color,
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: `0 5px 15px rgba(${
                social.color === "#00ffff"
                  ? "0, 255, 255"
                  : social.color === "#ff00ff"
                  ? "255, 0, 255"
                  : "255, 255, 255"
              }, 0.2)`,
              cursor: "pointer",
              textShadow: `0 0 8px ${social.color}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px) scale(1.05)";
              e.currentTarget.style.boxShadow = `0 10px 25px rgba(${
                social.color === "#00ffff"
                  ? "0, 255, 255"
                  : social.color === "#ff00ff"
                  ? "255, 0, 255"
                  : "255, 255, 255"
              }, 0.4)`;
              e.currentTarget.style.background = social.color;
              e.currentTarget.style.color = "#000000";
              e.currentTarget.style.textShadow = "none";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px) scale(1)";
              e.currentTarget.style.boxShadow = `0 5px 15px rgba(${
                social.color === "#00ffff"
                  ? "0, 255, 255"
                  : social.color === "#ff00ff"
                  ? "255, 0, 255"
                  : "255, 255, 255"
              }, 0.2)`;
              e.currentTarget.style.background = `rgba(${
                social.color === "#00ffff"
                  ? "0, 255, 255"
                  : social.color === "#ff00ff"
                  ? "255, 0, 255"
                  : "255, 255, 255"
              }, 0.1)`;
              e.currentTarget.style.color = social.color;
              e.currentTarget.style.textShadow = `0 0 8px ${social.color}`;
            }}
          >
            <span style={{ fontSize: "24px" }}>{social.icon}</span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              {social.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
