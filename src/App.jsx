import React, { useState } from "react";
import "./App.css";
import video1 from "./video/video.gif";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  const handleClick = (event) => {
    const x = event.clientX;
    const y = event.clientY;

    setPosition({ x, y });
    setIsMoving(true);

    // Reset the moving state after the animation duration
    setTimeout(() => {
      setIsMoving(false);
    }, 1000); // Adjust the duration as needed
  };

  return (
    <div
      className="App"
      style={{ height: "100vh", width: "100vw" }}
      onClick={handleClick}
    >
      <div
        className={`logo ${isMoving ? "moving" : ""}`}
        style={{ left: position.x, top: position.y }}
      >
        <img src={video1} width="100" height="100" alt="video1" />
      </div>
    </div>
  );
}

export default App;
