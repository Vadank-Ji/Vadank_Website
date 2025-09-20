import React from "react";

const SocialMedia: React.FC = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Vadank-Ji",
      icon: (
        <svg
          style={{
            width: "20px",
            height: "20px",
            fill: "#000000ff",
          }}
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      color: "#dc267f",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vadankji?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: (
        <span
          style={{
            color: "#0077B5",
            fontWeight: "bold",
            background: "#fff",
            borderRadius: "3px",
            padding: "2px 6px",
            textShadow: "none",
          }}
        >
          in
        </span>
      ),
      color: "#0077b5",
    },
    {
      name: "X",
      url: "https://twitter.com/VadankV",
      icon: (
        <span
          style={{
            color: "#ffffffff",
            fontWeight: "bold",
            background: "#000000ff",
            borderRadius: "3px",
            padding: "2px 6px",
            textShadow: "none",
          }}
        >
          𝕏
        </span>
      ),
      color: "#1da1f2",
    },
    {
      name: "Email",
      url: "mailto:vadank0806@gmail.com",
      icon: (
        <span
          style={{
            color: "#EA4335",
            fontWeight: "bold",
            background: "#313131ff",
            borderRadius: "3px",
            padding: "0px 6px",
            textShadow: "none",
          }}
        >
          ✉️
        </span>
      ),
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
            <div style={{ fontSize: "24px" }}>{social.icon}</div>
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
