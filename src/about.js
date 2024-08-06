// import React from "react";
// import { useNavigate } from "react-router-dom";

// function About() {
//   const navigate = useNavigate();
//   function gotohome() {
//     navigate("/");
//   }
//   return (
//     <>
//       <div>about page</div>
//       <button onClick={gotohome}>go ot home</button>
//     </>
//   );
// }

// export default About;
// src/About.js
import React from "react";
import Chatbot from "./Chatbot";

function About() {
  return (
    <div>
      <Chatbot />
    </div>
  );
}

export default About;
