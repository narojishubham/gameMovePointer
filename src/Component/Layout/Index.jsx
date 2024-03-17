import React, { useEffect, useState } from "react";
import ArrowImage from "./image.png";
import './Layout.css';
import BannerComponent from "../BannerComponent/index.jsx";
import TextComponent from "../TextComponent/TextComponent.jsx";
import Carousel from "../Carousel/index.jsx";

function Layout() {
const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const showSlides = () => {
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("dot");

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      let newIndex = slideIndex + 1;
      if (newIndex >= slides.length) {
        newIndex = 0;
      }

      setSlideIndex(newIndex);
      slides[newIndex].style.display = "block";
    };

    const interval = setInterval(showSlides, 4000);
    console.log({ interval });
    return () => clearInterval(interval);

  }, [slideIndex]);

  const [width, setWidth] = useState(0);
  const [height1, setHeight1] = useState(0);
  const [width2, setWidth2] = useState(0);
  const [height2, setHeight2] = useState(0);

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      if (width <= 8) {
        setWidth((prevWidth) => prevWidth + 1.5);
      } else if (width === 9 && height1 <= 8) {
        setHeight1((prevHeight) => prevHeight + 1.5);
      } else if (height1 === 9 && width2 <= 8) {
        setWidth2((prevWidth) => prevWidth + 1.5);
      } else if (width2 === 9 && height2 <= 8) {
        setHeight2((prevHeight) => prevHeight + 1.5);
      }
    }, 150);

    return () => clearTimeout(timeout);
  }, [width, height1, width2, height2]);
  return (
  <div>
      {/* banner Image */}
 <BannerComponent/> 
      {/* text */}
      <div>
<TextComponent/>
      </div>
      {/* Slider */}
      <div>
        <Carousel/>
      </div>
    </div>
  );
}

export default Layout;
