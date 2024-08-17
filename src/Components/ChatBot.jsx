import React, { useState } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi👋 How can I help you", isUser: false },
    { text: "Looking for my package", isUser: true },
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

    if (lastMessage.text.toLowerCase().includes("package")) {
      response = "Sorry to hear that. Can you please provide your tracking number?";
    } else {
      response = "I'm not sure I understand. Can you please rephrase your question?";
    }

    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { text: response, isUser: false }]);
    }, 1000);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {messages.map((message, index) => (
        <div
          key={index}
          style={{
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
        style={{ padding: "10px", width: "100%" }}
      />
      <button onClick={handleSendMessage} style={{ padding: "10px", width: "100%" }}>
        Send
      </button>
    </div>
  );
};

export default ChatBot;