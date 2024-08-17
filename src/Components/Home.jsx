import React, { useState } from "react";
import ur from "../Assets/ur.png";
import alu from "../Assets/alu.png";
import cmu from "../Assets/cmu.png";
import students from "../Assets/grad.png";
import ChatBot from "../Components/ChatBot";

const Home = () => {
  const [showChatBot, setShowChatBot] = useState(false);

  const handleChatWithUsClick = () => {
    setShowChatBot(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "40px",
          gap: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ color: "#252525", fontWeight: "bold", fontSize: "60px" }}>
            Only government approved universities
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div>
              <img src={ur} alt="" width={80} />
            </div>
            <div>
              <img src={alu} alt="" width={80} />
            </div>
            <div>
              <img src={cmu} alt="" width={80} />
            </div>
          </div>
          <p
            style={{ color: "#0474BA", fontWeight: "normal", fontSize: "20px" }}
          >
            'Now secure your future with online'
          </p>
          <div style={{ display: "flex", gap: "40px" }}>
            <button
              style={{
                padding: "10px 20px",
                border: "none",
                backgroundColor: "#0474BA",
                borderRadius: "5px",
                color: "#fff",
                fontWeight: "bold",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1) translateY(10px)";
                e.target.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1) translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              Create my learning roadmap
            </button>

            <button
              onClick={handleChatWithUsClick}
              style={{
                padding: "10px 20px",
                border: "none",
                borderColor: "#0474BA",
                borderStyle: "solid",
                borderWidth: "1px",
                borderRadius: "5px",
                color: "#0474BA",
                fontWeight: "bold",
              }}
            >
              Chat with us
            </button>
          </div>
        </div>
        <div>
          <img src={students} alt="" width={480} />
        </div>
      </div>
      <div
        style={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {showChatBot && <ChatBot />}
      </div>
    </div>
  );
};

export default Home;
