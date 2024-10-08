import React, { useState } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi👋 I'm KamiConnekt AI. How can I help you with your university research?", isUser: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputValue, isUser: true },
      ]);
      setInputValue("");
      respondToUser();
    }
  };

  const respondToUser = () => {
    const lastMessage = messages[messages.length - 1];
    let response = "";

    switch (true) {
      case lastMessage.text.toLowerCase().includes("What are the universities availble of my course of choice?"):
        response = "The Universities of your course you can find them in the universities page!"
      case lastMessage.text.toLowerCase().includes("What are the academic programs and courses offered by the university?"):
        response = "Admission requirements vary by university, but typically include a high school diploma, SAT/ACT scores, and letters of recommendation.";
        break;
      case lastMessage.text.toLowerCase().includes("application deadline"):
        response = "Application deadlines vary by university, but typically range from December to February for fall semester admissions.";
        break;
      case lastMessage.text.toLowerCase().includes("scholarships"):
        response = "Yes, we offer various scholarships to eligible students. Please check our website for more information.";
        break;
      case lastMessage.text.toLowerCase().includes("majors"):
        response = "We offer a wide range of majors, including business, engineering, computer science, and more.";
        break;
      default:
        response = "We are here to chat with you about colleges you want to get admitted to.";
    }

    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { text: response, isUser: false }]);
    }, 1000);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height:"100vh", gap: "10px" }}>
      {messages.map((message, index) => (
        <div
          key={index}
          style={{
            width:"50%",
            backgroundColor: message.isUser ? "#0474BA" : "#F4F4F4",
            padding: "10px",
            borderRadius: "10px",
            margin: "10px",
          }}
        >
          {message.text}
        </div>
      ))}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type a message..."
        style={{
           width:"50%", 
          padding: "10px",
          borderWidth: "2px",
          borderColor: "#0474BA",
          borderStyle: "solid",
          borderRadius: "5px",
        }}
      />
      <button
        onClick={handleSendMessage}
        style={{
          width: "35%",
          padding: "10px 20px",
          border: "none",
          backgroundColor: "#0474BA",
          borderRadius: "5px",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        Send
      </button>
    </div>
  );
};

export default ChatBot;