import React, { useState } from "react";
import "./App.css";
import video1 from "./video/video.gif";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0, angle: 0 });

  const handleClick = (event) => {
    const x = event.clientX;
    const y = event.clientY;

    // Calculate the angle between current position and click position for horizontal rotation
    const angle =
      Math.atan2(y - position.y, x - position.x) * (180 / Math.PI) + 90;
    console.log({ angle });

    setPosition({ x, y, angle });
  };

  return (
    <div
      className="App"
      style={{ height: "100vh", width: "100vw", background: "#000" }}
      onClick={handleClick}
    >
      <div
        className="logo"
        style={{
          left: position.x,
          top: position.y,
          transform: position.angle < 220 ? "scaleX(-1)" : "",
        }}
      >
        <img src={video1} width="100" height="100" alt="video" />
      </div>
    </div>
  );
}

export default App;
