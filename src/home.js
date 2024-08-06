import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css"; // Assuming you have a dedicated CSS file for the Home component
import icon6 from "./61.png"; // Import your image

function Home() {
  const navigate = useNavigate();

  function gotoabout() {
    navigate("/about");
  }

  return (
    <div className="home-container">
      <div className="blurred-box">
        <h1>Welcome To TeleChatBot</h1>
        <p>
          TELE CHATBOT is an AI-powered virtual assistant that enhances customer
          engagement by providing intelligent, responsive communication. It
          helps businesses answer queries, provide information, and assist with
          various tasks, ensuring a smooth and personalized user experience.
        </p>
        <button className="circle-button" onClick={gotoabout}>
          <img src={icon6} alt="Chat Icon" />
        </button>
      </div>
    </div>
  );
}

export default Home;
