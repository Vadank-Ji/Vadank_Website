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

        {/* Professional Journey & Background */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(25, 25, 112, 0.3), rgba(75, 0, 130, 0.2))",
            padding: "35px",
            borderRadius: "25px",
            marginBottom: "40px",
            border: "3px solid rgba(75, 0, 130, 0.8)",
            boxShadow: "0 20px 50px rgba(75, 0, 130, 0.4)",
          }}
        >
          <h2
            style={{
              color: "#ffffff",
              fontSize: "32px",
              marginBottom: "25px",
              fontWeight: "700",
              textAlign: "center",
              textShadow: "0 0 25px rgba(255, 255, 255, 0.8)",
            }}
          >
            🚀 My Journey & Vision
          </h2>
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", 
            gap: "30px",
            marginBottom: "30px"
          }}>
            <div>
              <h3 style={{
                color: "#dc267f",
                fontSize: "24px",
                marginBottom: "15px",
                fontWeight: "700",
                textShadow: "0 0 15px rgba(220, 38, 127, 1)",
              }}>
                🎓 Background & Education
              </h3>
              <p style={{
                color: "#ffffff",
                fontSize: "18px",
                lineHeight: "1.7",
                fontWeight: "500",
                textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
              }}>
                Computer Science student with a passion for technology and innovation. 
                Currently pursuing my degree while actively building real-world projects 
                and staying updated with the latest industry trends. Strong foundation 
                in programming fundamentals, data structures, and software engineering principles.
              </p>
            </div>

            <div>
              <h3 style={{
                color: "#ff6347",
                fontSize: "24px",
                marginBottom: "15px",
                fontWeight: "700",
                textShadow: "0 0 15px rgba(255, 99, 71, 1)",
              }}>
                💼 Professional Aspirations
              </h3>
              <p style={{
                color: "#ffffff",
                fontSize: "18px",
                lineHeight: "1.7",
                fontWeight: "500",
                textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
              }}>
                Aspiring to become a Full-Stack Developer and eventually transition into 
                AI/ML engineering. My goal is to create impactful applications that solve 
                real-world problems while continuously learning cutting-edge technologies. 
                Passionate about clean code, user experience, and innovative solutions.
              </p>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <h3 style={{
              color: "#4b0082",
              fontSize: "24px",
              marginBottom: "20px",
              fontWeight: "700",
              textShadow: "0 0 15px rgba(75, 0, 130, 1)",
            }}>
              🎯 Current Focus Areas
            </h3>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "15px",
              marginBottom: "25px"
            }}>
              {[
                "React & TypeScript", "Node.js & Express", "Python & Django",
                "Machine Learning", "Cloud Computing", "DevOps & CI/CD",
                "UI/UX Design", "Database Design", "API Development"
              ].map((skill, index) => (
                <span
                  key={index}
                  style={{
                    background: "rgba(220, 38, 127, 0.3)",
                    color: "#ffffff",
                    padding: "10px 20px",
                    borderRadius: "25px",
                    fontSize: "16px",
                    fontWeight: "600",
                    border: "2px solid rgba(220, 38, 127, 0.6)",
                    boxShadow: "0 8px 20px rgba(220, 38, 127, 0.3)",
                    textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Interests & Hobbies */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(255, 20, 147, 0.3), rgba(138, 43, 226, 0.2))",
            padding: "35px",
            borderRadius: "25px",
            marginBottom: "40px",
            border: "3px solid rgba(138, 43, 226, 0.8)",
            boxShadow: "0 20px 50px rgba(138, 43, 226, 0.4)",
          }}
        >
          <h2
            style={{
              color: "#ffffff",
              fontSize: "32px",
              marginBottom: "25px",
              fontWeight: "700",
              textAlign: "center",
              textShadow: "0 0 25px rgba(255, 255, 255, 0.8)",
            }}
          >
            🌟 Beyond Code: My Interests
          </h2>
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
            gap: "25px" 
          }}>
            <div style={{
              background: "rgba(255, 20, 147, 0.2)",
              padding: "25px",
              borderRadius: "20px",
              border: "2px solid rgba(255, 20, 147, 0.6)",
              textAlign: "center"
            }}>
              <h3 style={{
                color: "#ff1493",
                fontSize: "22px",
                marginBottom: "15px",
                fontWeight: "700",
                textShadow: "0 0 15px rgba(255, 20, 147, 1)",
              }}>
                🎮 Gaming & Tech
              </h3>
              <p style={{
                color: "#ffffff",
                fontSize: "16px",
                lineHeight: "1.6",
                fontWeight: "500",
                textShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
              }}>
                Passionate gamer who loves exploring virtual worlds and understanding 
                game mechanics. This hobby enhances my problem-solving skills and 
                keeps me updated with the latest in interactive technology.
              </p>
            </div>

            <div style={{
              background: "rgba(138, 43, 226, 0.2)",
              padding: "25px",
              borderRadius: "20px",
              border: "2px solid rgba(138, 43, 226, 0.6)",
              textAlign: "center"
            }}>
              <h3 style={{
                color: "#8a2be2",
                fontSize: "22px",
                marginBottom: "15px",
                fontWeight: "700",
                textShadow: "0 0 15px rgba(138, 43, 226, 1)",
              }}>
                📚 Continuous Learning
              </h3>
              <p style={{
                color: "#ffffff",
                fontSize: "16px",
                lineHeight: "1.6",
                fontWeight: "500",
                textShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
              }}>
                Always curious and eager to learn new technologies, frameworks, 
                and programming paradigms. I believe in staying ahead of the curve 
                and adapting to the ever-evolving tech landscape.
              </p>
            </div>

            <div style={{
              background: "rgba(186, 85, 211, 0.2)",
              padding: "25px",
              borderRadius: "20px",
              border: "2px solid rgba(186, 85, 211, 0.6)",
              textAlign: "center"
            }}>
              <h3 style={{
                color: "#ba55d3",
                fontSize: "22px",
                marginBottom: "15px",
                fontWeight: "700",
                textShadow: "0 0 15px rgba(186, 85, 211, 1)",
              }}>
                🤝 Collaboration
              </h3>
              <p style={{
                color: "#ffffff",
                fontSize: "16px",
                lineHeight: "1.6",
                fontWeight: "500",
                textShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
              }}>
                I thrive in team environments and enjoy collaborating on projects. 
                Love sharing knowledge, learning from others, and contributing to 
                open-source communities.
              </p>
            </div>
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
