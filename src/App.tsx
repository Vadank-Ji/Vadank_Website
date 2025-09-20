import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Dropdown from "./components/Dropdown";
import SocialMedia from "./components/SocialMedia";

const App: React.FC = () => {
  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        padding: "20px",
        position: "relative",
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      {/* Central Node - Header */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "120vh",
          paddingBottom: "100px",
        }}
      >
        {/* Header - Central Mind Map Node */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            animation: "float 6s ease-in-out infinite",
          }}
        >
          <Header />
        </div>

        {/* Mind Map Connections */}
        <svg
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100vh",
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          {/* Connection lines */}
          <defs>
            <linearGradient
              id="lineGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgba(120, 119, 198, 0.6)" />
              <stop offset="100%" stopColor="rgba(255, 119, 198, 0.6)" />
            </linearGradient>
          </defs>

          {/* Left branch - Skills */}
          <path
            d="M 50% 40% Q 35% 45% 25% 60%"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            style={{ animation: "pulse 6s ease-in-out infinite" }}
          />

          {/* Middle branch - Interests */}
          <path
            d="M 50% 45% Q 50% 50% 50% 60%"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            style={{ animation: "pulse 6s ease-in-out infinite 1s" }}
          />

          {/* Right branch - Learning */}
          <path
            d="M 50% 40% Q 65% 45% 75% 60%"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            style={{ animation: "pulse 6s ease-in-out infinite 1.5s" }}
          />

          {/* Bottom branch - About */}
          <path
            d="M 50% 55% Q 50% 75% 50% 95%"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            fill="none"
            style={{ animation: "pulse 6s ease-in-out infinite 2s" }}
          />

          {/* Top-left branch - Social Media */}
          <path
            d="M 50% 35% Q 35% 30% 25% 25%"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            style={{ animation: "pulse 6s ease-in-out infinite 3s" }}
          />
        </svg>

        {/* Skills Node - Left Branch */}
        <div
          style={{
            position: "absolute",
            left: "10%",
            top: "55%",
            animation: "float 12s ease-in-out infinite 1s",
            zIndex: 5,
          }}
        >
          <Dropdown
            title="Skills"
            items={["🌐 HTML", "🎨 CSS", "⚙️ C", "🔧 C++", "🐍 Basic Python"]}
            backgroundColor="rgba(0, 255, 255, 0.1)"
            accentColor="#00ffff"
          />
        </div>

        {/* Interests Node - Middle Branch */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "55%",
            transform: "translateX(-50%)",
            animation: "float 12s ease-in-out infinite 2s",
            zIndex: 5,
          }}
        >
          <Dropdown
            title="Interests"
            items={[
              "🎵 Listening to music",
              "👨‍🏫 Teaching cousins",
              "📚 Reading manga",
              "🧩 Solving puzzles & brain games",
              "📱 Social media browsing",
            ]}
            backgroundColor="rgba(255, 255, 0, 0.1)"
            accentColor="#ffff00"
          />
        </div>

        {/* Learning Node - Right Branch */}
        <div
          style={{
            position: "absolute",
            right: "10%",
            top: "55%",
            animation: "float 12s ease-in-out infinite 3s",
            zIndex: 5,
          }}
        >
          <Dropdown
            title="Learning"
            items={["☕ Java", "🐍 Python", "🧠 DSA"]}
            backgroundColor="rgba(255, 0, 255, 0.1)"
            accentColor="#ff00ff"
          />
        </div>

        {/* Social Media Node - Top-left Branch */}
        <div
          style={{
            position: "absolute",
            left: "8%",
            top: "18%",
            animation: "float 14s ease-in-out infinite 4s",
            zIndex: 5,
          }}
        >
          <SocialMedia />
        </div>

        {/* About Node - Bottom Branch */}
        <div
          style={{
            position: "absolute",
            top: "90%",
            left: "0",
            right: "0",
            animation: "float 15s ease-in-out infinite 3s",
            zIndex: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 5%",
          }}
        >
          <About />
        </div>

        {/* Decorative Elements */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "10%",
            width: "4px",
            height: "4px",
            background: "rgba(120, 200, 255, 0.8)",
            borderRadius: "50%",
            animation: "pulse 3s ease-in-out infinite",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "15%",
            width: "6px",
            height: "6px",
            background: "rgba(255, 119, 198, 0.8)",
            borderRadius: "50%",
            animation: "pulse 3s ease-in-out infinite 1s",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "30%",
            left: "20%",
            width: "3px",
            height: "3px",
            background: "rgba(0, 255, 255, 0.8)",
            borderRadius: "50%",
            animation: "pulse 3s ease-in-out infinite 2s",
          }}
        />
      </div>
    </div>
  );
};

export default App;
