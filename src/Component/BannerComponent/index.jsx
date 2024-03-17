import React, { useEffect, useState } from "react";
import ArrowImage from "../Layout/image.png";
import menuImage from "./menu.jpeg";
import "./BannerComponent.css";

function BannerComponent() {
  const images = [
    {
      imageUrl:
        "https://images.bannerbear.com/direct/EjJywNMlJm5zmerB8a/requests/000/033/000/213/0Mn5r3E1XY0gmWDZQWPoD9kg7/9e42168a169264bb575a5ec10acd1c8942967845.jpg",
      text: "Caption Text 1",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRoX0bj1R0iaXT2KmpbcldfHfnqSh4DzKdOz2NvBpQykc2PD2nLrEX46HzoEu7Mr-gtA&usqp=CAU",
      text: "Caption Text 2",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2022/01/28/18/32/leaves-6975462_1280.png",
      text: "Caption Text 3",
    },
  ];

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
      resetLoaderAnimation();
      setSlideIndex(newIndex);
      slides[newIndex].style.display = "block";
    };

    const interval = setInterval(showSlides, 4000);
    resetLoaderAnimation();
    return () => clearInterval(interval);
  }, [slideIndex]);

  const changeSlide = () => {
    resetLoaderAnimation();
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

  const [resetLoader, setResetLoader] = useState(false);

  const [width, setWidth] = useState(0);
  const [height1, setHeight1] = useState(0);
  const [width2, setWidth2] = useState(0);
  const [height2, setHeight2] = useState(0);
  const resetLoaderAnimation = () => {
    console.log("dsadsada");
    setResetLoader(false);
    setWidth(0);
    setHeight1(0);
    setWidth2(0);
    setHeight2(0);
  };
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
    }, 120);

    return () => clearTimeout(timeout);
  }, [width, height1, width2, height2, resetLoader]);
  return (
    <div
      style={{
        width: "100%",
        height: "53rem",
        position: "relative",
      }}
    >
      <div className="slideshow-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`mySlides fade ${index === slideIndex ? "active" : ""}`}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src={image.imageUrl}
            />
          </div>
        ))}
      </div>

      {/* Header menu  */}
      <div className="MenuBarClass">
        <div className="menuItem">
          <div>About</div>
          <div>News</div>
          <div>Services</div>
          <div>Our Team</div>
          <div>Make Enquiry</div>
        </div>
        <div className="menuImageClass">
          <img
            className="ShowMenu"
            style={{ width: "1.5rem" }}
            src={menuImage}
          />
        </div>

        <div className="ContactNameClass">
          Contact us <img style={{ width: "1.5rem" }} src={ArrowImage} />
        </div>
      </div>

      <div className="bannerTextPosition">
        <div style={{ paddingBottom: "1rem" }}>Welcom To TenTwenty Farms</div>
        <div className="bannerHeaderText">From Our Farms To Your Hands</div>
      </div>
      <div className="nextButtonImage">
        <div
          style={{ border: "1px solid rgb(122, 119, 119)", padding: "1rem" }}
          className="border box"
        >
          <div
            onClick={changeSlide}
            style={{
              width: "6rem",
              height: "6rem",
              position: "relative",
              cursor: "pointer",
            }}
          >
            <img
              className={slideIndex === 2 ? "secondImage" : ""}
              style={{ height: "100%", width: "100%" }}
              src={images[slideIndex + 1 === 3 ? 0 : slideIndex + 1]?.imageUrl}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              Next
            </div>
            <div
              className="transition-box1 linePosition"
              style={{ width: `${width === 9 ? 8.5 : width}rem` }}
            ></div>
            <div
              className="transition-box2 linePosition2"
              style={{ height: `${height1 === 9 ? 8.5 : height1}rem` }}
            ></div>
            <div
              className="transition-box3 linePosition3"
              style={{ width: `${width2 === 9 ? 8.5 : width2}rem` }}
            ></div>
            <div
              className="transition-box4 linePosition4"
              style={{ height: `${height2 === 9 ? 8.5 : height2}rem` }}
            ></div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div>{slideIndex + 1 === 3 ? "03" : `0${slideIndex + 1}`}</div>
          <div className="lineClass"></div>
          <div>0{images.length}</div>
        </div>
      </div>
    </div>
  );
}

export default BannerComponent;
