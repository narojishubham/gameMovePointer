import React from 'react'
import './TextComponent.css'
function TextComponent() {
  return (
      <div>
                  <div
          style={{
            fontSize: "2rem",
            textAlign: "center",
            padding: "10rem 0 3rem",
            fontSize: "56px",
          }}
        >
          Quality Products
        </div>
        <div style={{
          width: "100%", display: 'flex', justifyContent: 'center'
        }}>
          <div className='description'
           
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </div>
        </div>
    </div>
  )
}

export default TextComponent