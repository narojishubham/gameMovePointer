import React, { useState } from 'react';
import './App.css';
import video1 from './video/video.gif'

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleClick = (event) => {
    const x = event.clientX;
    const y = event.clientY;

    setPosition({ x, y });
  };

  return (
    <div className="App" style={{    height:' 100vh',
    width:' 100vw'}} onClick={handleClick}>
      <div
        className="logo"
        style={{ left: position.x, top: position.y }}
      >
<img src={ video1}width="100" height="100"></img>


    </div>
    </div>
  );
}

export default App;
