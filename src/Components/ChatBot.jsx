import React, { useState } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi👋 How can I help you", isUser: false },
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
    <div style={{ display: "flex", flexDirection: "column", justifyContent:"center", alignItems:"center", gap:"10px"}}>
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
        style={{ padding: "10px", borderWidth:"2px", borderColor:"#0474BA", borderStyle:"solid", borderRadius:"5px"}}
      />
      <button onClick={handleSendMessage} style={{width:"100%", padding: "10px 20px", border: "none", backgroundColor: "#0474BA", borderRadius: "5px", color: "#fff", fontWeight: "bold" }}>
        Send
      </button>
    </div>
  );
};

export default ChatBot;