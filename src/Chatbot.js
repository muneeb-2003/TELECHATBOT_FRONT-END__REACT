import React, { useState } from "react";
import "./Chatbot.css";
import userAvatar from "./l.png";
import botAvatar from "./p.png";
import icon6 from "./ap.gif"; // Import your image

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", content: input }]);
      setInput("");

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", content: "This is a bot response." },
        ]);
      }, 1000);
    }
  };

  const renderMessages = () => {
    return messages.map((msg, index) => (
      <div key={index} className={`message ${msg.sender}`}>
        <img
          src={msg.sender === "user" ? userAvatar : botAvatar}
          alt="Avatar"
          className="avatar"
        />
        <div className="message-content">{msg.content}</div>
      </div>
    ));
  };

  return (
    <div className="chat-container">
      <h2>Your Words, Our Platform</h2>
      <div className="messages">{renderMessages()}</div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        {/* <button onClick={sendMessage}>Send</button> */}
        <button onClick={sendMessage}>
          <img src={icon6} alt="Chat Icon" />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
