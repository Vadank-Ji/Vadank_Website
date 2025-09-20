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
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        border: "3px solid #dc267f",
        boxShadow: "0 20px 50px rgba(220, 38, 127, 0.4)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "48px",
          color: "#ffffff",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          fontWeight: "800",
          marginBottom: "30px",
          textShadow:
            "0 0 30px rgba(220, 38, 127, 1), 0 0 60px rgba(255, 255, 255, 0.5)",
          position: "relative",
          zIndex: 2,
        }}
      >
        About Me 👨‍💻
      </h1>

      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              color: "#ffffff",
              fontWeight: "600",
              textShadow: "0 0 15px rgba(255, 255, 255, 0.8)",
            }}
          >
            I'm a versatile developer with a passion for{" "}
            <span
              style={{
                color: "#dc267f",
                fontWeight: "800",
                textShadow: "0 0 20px rgba(220, 38, 127, 1)",
              }}
            >
              continuous learning
            </span>{" "}
            and{" "}
            <span
              style={{
                color: "#ff6347",
                fontWeight: "800",
                textShadow: "0 0 20px rgba(255, 99, 71, 1)",
              }}
            >
              innovation
            </span>
            !
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              background: "rgba(220, 38, 127, 0.2)",
              padding: "30px",
              borderRadius: "20px",
              textAlign: "center",
              border: "3px solid rgba(220, 38, 127, 0.8)",
              boxShadow: "0 15px 40px rgba(220, 38, 127, 0.4)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          >
            <h3
              style={{
                color: "#dc267f",
                fontSize: "24px",
                marginBottom: "15px",
                fontWeight: "800",
                textShadow: "0 0 15px rgba(220, 38, 127, 1)",
              }}
            >
              🌐 Web Development
            </h3>
            <p
              style={{
                color: "#ffffff",
                fontSize: "18px",
                lineHeight: "1.6",
                fontWeight: "500",
                textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
              }}
            >
              Building modern, responsive web applications with cutting-edge
              technologies.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255, 99, 71, 0.2)",
              padding: "30px",
              borderRadius: "20px",
              textAlign: "center",
              border: "3px solid rgba(255, 99, 71, 0.8)",
              boxShadow: "0 15px 40px rgba(255, 99, 71, 0.4)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          >
            <h3
              style={{
                color: "#ff6347",
                fontSize: "24px",
                marginBottom: "15px",
                fontWeight: "800",
                textShadow: "0 0 15px rgba(255, 99, 71, 1)",
              }}
            >
              🤖 AI & Machine Learning
            </h3>
            <p
              style={{
                color: "#ffffff",
                fontSize: "18px",
                lineHeight: "1.6",
                fontWeight: "500",
                textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
              }}
            >
              Exploring artificial intelligence and machine learning to solve
              complex problems.
            </p>
          </div>
        </div>

        <div
          style={{
            background: "rgba(25, 25, 112, 0.3)",
            padding: "35px",
            borderRadius: "25px",
            textAlign: "center",
            border: "3px solid rgba(25, 25, 112, 0.8)",
            boxShadow: "0 20px 50px rgba(25, 25, 112, 0.4)",
          }}
        >
          <h2
            style={{
              color: "#ffffff",
              fontSize: "32px",
              marginBottom: "20px",
              fontWeight: "700",
              textShadow: "0 0 25px rgba(255, 255, 255, 0.8)",
            }}
          >
            Let's Connect! 🤝
          </h2>
          <p
            style={{
              color: "#ffffff",
              fontSize: "20px",
              marginBottom: "30px",
              lineHeight: "1.6",
              fontWeight: "500",
              textShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
            }}
          >
            I'm always open to discussing new opportunities, collaborating on
            projects, or just having a tech chat!
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "25px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="mailto:vadank0806@gmail.com"
              style={{
                background: "rgba(220, 38, 127, 0.3)",
                color: "#ffffff",
                border: "3px solid #dc267f",
                padding: "15px 30px",
                borderRadius: "30px",
                fontSize: "18px",
                fontWeight: "700",
                cursor: "pointer",
                boxShadow: "0 12px 35px rgba(220, 38, 127, 0.4)",
                transition: "all 0.3s ease",
                textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
                textDecoration: "none",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(220, 38, 127, 0.6)";
                e.currentTarget.style.boxShadow =
                  "0 20px 50px rgba(220, 38, 127, 0.8)";
                e.currentTarget.style.transform =
                  "translateY(-5px) scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(220, 38, 127, 0.3)";
                e.currentTarget.style.boxShadow =
                  "0 12px 35px rgba(220, 38, 127, 0.4)";
                e.currentTarget.style.transform = "translateY(0px) scale(1)";
              }}
            >
              📧 Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/vadankji?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "rgba(255, 99, 71, 0.3)",
                color: "#ffffff",
                border: "3px solid #ff6347",
                padding: "15px 30px",
                borderRadius: "30px",
                fontSize: "18px",
                fontWeight: "700",
                cursor: "pointer",
                boxShadow: "0 12px 35px rgba(255, 99, 71, 0.4)",
                transition: "all 0.3s ease",
                textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
                textDecoration: "none",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 99, 71, 0.6)";
                e.currentTarget.style.boxShadow =
                  "0 20px 50px rgba(255, 99, 71, 0.8)";
                e.currentTarget.style.transform =
                  "translateY(-5px) scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 99, 71, 0.3)";
                e.currentTarget.style.boxShadow =
                  "0 12px 35px rgba(255, 99, 71, 0.4)";
                e.currentTarget.style.transform = "translateY(0px) scale(1)";
              }}
            >
              💼 LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
