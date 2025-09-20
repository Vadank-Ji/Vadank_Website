import React from "react";

const About: React.FC = () => {
  return (
    <div
      className="glass-card"
      style={{
        padding: "40px",
        maxWidth: "800px",
        width: "100%",
        position: "relative",
        overflow: "hidden",
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
            "radial-gradient(circle at 20% 30%, rgba(0, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)",
          animation: "pulse 5s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      <h1
        style={{
          textAlign: "center",
          fontSize: "36px",
          color: "#ffffff",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          fontWeight: "600",
          marginBottom: "30px",
          textShadow: "0 0 20px rgba(0, 255, 255, 0.6)",
          position: "relative",
          zIndex: 2,
        }}
      >
        About Me 👨‍💻
      </h1>

      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Introduction Section */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <h2
            style={{
              color: "#ffffff",
              fontSize: "20px",
              lineHeight: "1.6",
              marginBottom: "20px",
              fontWeight: "400",
              textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
            }}
          >
            I'm a{" "}
            <span
              style={{
                background: "linear-gradient(45deg, #00ffff, #ff00ff)",
                backgroundSize: "200% 200%",
                animation: "gradient-shift 3s ease infinite",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                padding: "2px 8px",
                borderRadius: "15px",
                fontSize: "22px",
                fontWeight: "600",
                border: "1px solid rgba(0, 255, 255, 0.3)",
                boxShadow: "0 0 15px rgba(0, 255, 255, 0.3)",
              }}
            >
              versatile developer
            </span>{" "}
            with a passion for continuous learning and innovation! 🚀
          </h2>
        </div>

        {/* Education Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "30px",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          <div
            style={{
              background: "rgba(0, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              padding: "20px",
              borderRadius: "15px",
              border: "1px solid rgba(0, 255, 255, 0.3)",
              boxShadow: "0 8px 25px rgba(0, 255, 255, 0.2)",
              textAlign: "center",
              flex: "1",
              minWidth: "300px",
            }}
          >
            <h2
              style={{
                color: "#00ffff",
                fontSize: "18px",
                margin: "0",
                fontWeight: "500",
                textShadow: "0 0 10px rgba(0, 255, 255, 0.8)",
              }}
            >
              📚 Currently pursuing my degree as a 2<sup>nd</sup> year student
              at <strong>Jaypee Institute of Information Technology</strong>
            </h2>
          </div>

          <img
            src="jiit.jpg"
            alt="JIIT Logo"
            style={{
              height: "80px",
              width: "80px",
              borderRadius: "50%",
              boxShadow: "0 0 20px rgba(0, 255, 255, 0.4)",
              border: "3px solid rgba(0, 255, 255, 0.6)",
              animation: "float 4s ease-in-out infinite",
            }}
          />
        </div>

        {/* Professional Aspirations */}
        <div style={{ position: "relative", zIndex: 2, marginBottom: "35px" }}>
          <h2
            style={{
              color: "#ffffff",
              fontSize: "24px",
              marginBottom: "20px",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textShadow: "0 0 15px rgba(255, 0, 255, 0.5)",
            }}
          >
            🚀 Professional Aspirations:
          </h2>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            {[
              "🎯 Develop impactful technology solutions that create meaningful change",
              "👨‍🏫 Become a respected researcher and educator in technology",
              "📖 Contribute to scientific knowledge through quality research publications",
              "🏢 Build an innovative tech/research based company",
              "💪 Maintain peak physical fitness (because balance matters!)",
            ].map((goal, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  padding: "15px 20px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 0, 255, 0.3)",
                  color: "#ffffff",
                  fontSize: "16px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  textShadow: "0 0 8px rgba(255, 255, 255, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 0, 255, 0.1)";
                  e.currentTarget.style.transform = "translateX(10px)";
                  e.currentTarget.style.borderColor = "#ff00ff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.transform = "translateX(0px)";
                  e.currentTarget.style.borderColor = "rgba(255, 0, 255, 0.3)";
                }}
              >
                {goal}
              </div>
            ))}
          </div>
        </div>

        {/* Personal Notes */}
        <div style={{ position: "relative", zIndex: 2, marginBottom: "35px" }}>
          <h2
            style={{
              color: "#ffffff",
              fontSize: "24px",
              marginBottom: "20px",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textShadow: "0 0 15px rgba(255, 255, 0, 0.5)",
            }}
          >
            ✨ Personal Notes:
          </h2>

          <div
            style={{
              background: "rgba(255, 255, 0, 0.1)",
              backdropFilter: "blur(15px)",
              padding: "25px",
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 0, 0.3)",
              boxShadow: "0 8px 25px rgba(255, 255, 0, 0.2)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "20px",
              }}
            >
              {[
                "🌙 Most productive during late-night coding sessions",
                "☕ Coffee enthusiast and debugging companion",
                "🔥 Proficient in multiple programming languages",
                "🎯 Enjoys solving algorithmic challenges on weekends",
                "🌟 Constantly learning new technologies and frameworks",
                "🎮 Gaming enthusiast and tech problem solver",
              ].map((fact, index) => (
                <div
                  key={index}
                  style={{
                    color: "#ffff00",
                    fontSize: "16px",
                    fontWeight: "500",
                    textShadow: "0 0 10px rgba(255, 255, 0, 0.8)",
                    padding: "10px",
                    borderRadius: "10px",
                    background: "rgba(255, 255, 0, 0.05)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255, 255, 0, 0.15)";
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255, 255, 0, 0.05)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  {fact}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Menu - Space-themed bottom section */}
        <div style={{ position: "relative", zIndex: 2, marginTop: "40px" }}>
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(0, 255, 255, 0.1) 0%, rgba(255, 0, 255, 0.1) 50%, rgba(255, 255, 0, 0.1) 100%)",
              backdropFilter: "blur(20px)",
              padding: "30px",
              borderRadius: "25px",
              border: "2px solid rgba(0, 255, 255, 0.3)",
              boxShadow:
                "0 15px 35px rgba(0, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Animated background particles */}
            <div
              style={{
                position: "absolute",
                top: "-50%",
                left: "-50%",
                width: "200%",
                height: "200%",
                background:
                  "radial-gradient(circle, rgba(0, 255, 255, 0.1) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
                animation: "float 8s ease-in-out infinite",
                pointerEvents: "none",
              }}
            />

            <h2
              style={{
                color: "#ffffff",
                fontSize: "28px",
                marginBottom: "20px",
                fontWeight: "700",
                textShadow: "0 0 20px rgba(0, 255, 255, 0.8)",
                position: "relative",
                zIndex: 3,
                background: "linear-gradient(45deg, #00ffff, #ff00ff, #ffff00)",
                backgroundSize: "200% 200%",
                animation: "gradient-shift 3s ease infinite",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              🚀 Connect With Me
            </h2>

            <p
              style={{
                color: "#ffffff",
                fontSize: "16px",
                marginBottom: "25px",
                opacity: "0.8",
                position: "relative",
                zIndex: 3,
                fontStyle: "italic",
              }}
            >
              Let's build something amazing together
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap",
                position: "relative",
                zIndex: 3,
              }}
            >
              <div
                style={{
                  background: "rgba(0, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                  color: "#00ffff",
                  padding: "12px 24px",
                  borderRadius: "20px",
                  fontSize: "16px",
                  fontWeight: "600",
                  boxShadow: "0 8px 25px rgba(0, 255, 255, 0.3)",
                  border: "1px solid rgba(0, 255, 255, 0.4)",
                  cursor: "pointer",
                  transition:
                    "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  textShadow: "0 0 10px rgba(0, 255, 255, 0.8)",
                  position: "relative",
                  overflow: "hidden",
                  userSelect: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-8px) scale(1.1) rotateX(5deg)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0, 255, 255, 0.6), 0 0 30px rgba(0, 255, 255, 0.4) inset";
                  e.currentTarget.style.background = "rgba(0, 255, 255, 0.4)";
                  e.currentTarget.style.borderColor = "#00ffff";
                  e.currentTarget.style.textShadow =
                    "0 0 20px rgba(0, 255, 255, 1), 0 0 30px rgba(255, 255, 255, 0.8)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0px) scale(1) rotateX(0deg)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0, 255, 255, 0.3)";
                  e.currentTarget.style.background = "rgba(0, 255, 255, 0.2)";
                  e.currentTarget.style.borderColor = "rgba(0, 255, 255, 0.4)";
                  e.currentTarget.style.textShadow =
                    "0 0 10px rgba(0, 255, 255, 0.8)";
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-4px) scale(0.95)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 15px rgba(0, 255, 255, 0.8), 0 0 50px rgba(0, 255, 255, 0.6) inset";
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-8px) scale(1.1) rotateX(5deg)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0, 255, 255, 0.6), 0 0 30px rgba(0, 255, 255, 0.4) inset";
                }}
                onClick={() => {
                  // Create ripple effect
                  const button = document.createElement("div");
                  button.style.position = "absolute";
                  button.style.borderRadius = "50%";
                  button.style.background = "rgba(255, 255, 255, 0.6)";
                  button.style.transform = "scale(0)";
                  button.style.animation = "ripple 0.6s linear";
                  button.style.left = "50%";
                  button.style.top = "50%";
                  button.style.width = "100px";
                  button.style.height = "100px";
                  button.style.marginLeft = "-50px";
                  button.style.marginTop = "-50px";
                  document.body.appendChild(button);
                  setTimeout(() => button.remove(), 600);
                }}
              >
                📧 Email Me
              </div>

              <div
                style={{
                  background: "rgba(255, 0, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                  color: "#ff00ff",
                  padding: "12px 24px",
                  borderRadius: "20px",
                  fontSize: "16px",
                  fontWeight: "600",
                  boxShadow: "0 8px 25px rgba(255, 0, 255, 0.3)",
                  border: "1px solid rgba(255, 0, 255, 0.4)",
                  cursor: "pointer",
                  transition:
                    "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  textShadow: "0 0 10px rgba(255, 0, 255, 0.8)",
                  position: "relative",
                  overflow: "hidden",
                  userSelect: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-8px) scale(1.1) rotateX(5deg)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(255, 0, 255, 0.6), 0 0 30px rgba(255, 0, 255, 0.4) inset";
                  e.currentTarget.style.background = "rgba(255, 0, 255, 0.4)";
                  e.currentTarget.style.borderColor = "#ff00ff";
                  e.currentTarget.style.textShadow =
                    "0 0 20px rgba(255, 0, 255, 1), 0 0 30px rgba(255, 255, 255, 0.8)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0px) scale(1) rotateX(0deg)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(255, 0, 255, 0.3)";
                  e.currentTarget.style.background = "rgba(255, 0, 255, 0.2)";
                  e.currentTarget.style.borderColor = "rgba(255, 0, 255, 0.4)";
                  e.currentTarget.style.textShadow =
                    "0 0 10px rgba(255, 0, 255, 0.8)";
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-4px) scale(0.95)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 15px rgba(255, 0, 255, 0.8), 0 0 50px rgba(255, 0, 255, 0.6) inset";
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-8px) scale(1.1) rotateX(5deg)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(255, 0, 255, 0.6), 0 0 30px rgba(255, 0, 255, 0.4) inset";
                }}
                onClick={() => {
                  // Create particle burst effect
                  for (let i = 0; i < 8; i++) {
                    const particle = document.createElement("div");
                    particle.style.position = "absolute";
                    particle.style.borderRadius = "50%";
                    particle.style.background = "rgba(255, 0, 255, 0.8)";
                    particle.style.width = "6px";
                    particle.style.height = "6px";
                    particle.style.pointerEvents = "none";
                    particle.style.animation = `particle-burst-${i} 0.8s ease-out forwards`;
                    document.body.appendChild(particle);
                    setTimeout(() => particle.remove(), 800);
                  }
                }}
              >
                💼 LinkedIn
              </div>

              <div
                style={{
                  background: "rgba(255, 255, 0, 0.2)",
                  backdropFilter: "blur(10px)",
                  color: "#ffff00",
                  padding: "12px 24px",
                  borderRadius: "20px",
                  fontSize: "16px",
                  fontWeight: "600",
                  boxShadow: "0 8px 25px rgba(255, 255, 0, 0.3)",
                  border: "1px solid rgba(255, 255, 0, 0.4)",
                  cursor: "pointer",
                  transition:
                    "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  textShadow: "0 0 10px rgba(255, 255, 0, 0.8)",
                  position: "relative",
                  overflow: "hidden",
                  userSelect: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-8px) scale(1.1) rotateX(5deg)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(255, 255, 0, 0.6), 0 0 30px rgba(255, 255, 0, 0.4) inset";
                  e.currentTarget.style.background = "rgba(255, 255, 0, 0.4)";
                  e.currentTarget.style.borderColor = "#ffff00";
                  e.currentTarget.style.textShadow =
                    "0 0 20px rgba(255, 255, 0, 1), 0 0 30px rgba(255, 255, 255, 0.8)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0px) scale(1) rotateX(0deg)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(255, 255, 0, 0.3)";
                  e.currentTarget.style.background = "rgba(255, 255, 0, 0.2)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 0, 0.4)";
                  e.currentTarget.style.textShadow =
                    "0 0 10px rgba(255, 255, 0, 0.8)";
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-4px) scale(0.95)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 15px rgba(255, 255, 0, 0.8), 0 0 50px rgba(255, 255, 0, 0.6) inset";
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-8px) scale(1.1) rotateX(5deg)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(255, 255, 0, 0.6), 0 0 30px rgba(255, 255, 0, 0.4) inset";
                }}
                onClick={() => {
                  // Create electric spark effect
                  const spark = document.createElement("div");
                  spark.style.position = "absolute";
                  spark.style.width = "2px";
                  spark.style.height = "20px";
                  spark.style.background =
                    "linear-gradient(90deg, transparent, #ffff00, transparent)";
                  spark.style.borderRadius = "2px";
                  spark.style.boxShadow = "0 0 10px #ffff00";
                  spark.style.animation = "lightning 0.3s ease-in-out 3";
                  spark.style.transformOrigin = "center";
                  document.body.appendChild(spark);
                  setTimeout(() => spark.remove(), 900);
                }}
              >
                🐙 GitHub
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
