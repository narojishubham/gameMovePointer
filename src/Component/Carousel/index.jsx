import React, { useRef, useState } from 'react'
import './Carousel.css'

function Carousel() {
 const carouselRef = useRef(null);
const [isDragStart,setIsDragStart] =useState(false)
const [isDragging,setIsDragging] =useState(false)
  const [positionDiff, setPositionDiff] = useState()
  const [prevPageX, setPrevPageX] = useState()
  const [prevScrollLeft,setPrevScrollLeft] = useState()
  const showHideIcons = () => {
    let scrollWidth = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
    const arrowIcons = document.querySelectorAll(".wrapper i");
    arrowIcons[0].style.display = carouselRef.current.scrollLeft === 0 ? "none" : "block";
    arrowIcons[1].style.display = carouselRef.current.scrollLeft === scrollWidth ? "none" : "block";
  };

  const autoSlide = () => {
    if (carouselRef.current.scrollLeft - (carouselRef.current.scrollWidth - carouselRef.current.clientWidth) > -1 || carouselRef.current.scrollLeft <= 0) return;

    let positionDiff = Math.abs(positionDiff && positionDiff);
    let firstImgWidth = carouselRef.current.querySelector("img").clientWidth + 14;
    let valDifference = firstImgWidth - positionDiff;

    if (carouselRef.current.scrollLeft > prevScrollLeft) { 
      return carouselRef.current.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    carouselRef.current.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
  };

  const dragStart = (e) => {
    setIsDragStart(true);
    setPrevPageX(e.pageX || e.touches[0].pageX);
    setPrevScrollLeft(carouselRef.current.scrollLeft);
  };

  const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    setIsDragging(true);
    carouselRef.current.classList.add("dragging");
    setPositionDiff((e.pageX || e.touches[0].pageX) - prevPageX);
    carouselRef.current.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
  };

  const dragStop = () => {
    setIsDragStart(false);
    carouselRef.current.classList.remove("dragging");

    if (!isDragging) return;
    setIsDragging(false);
    autoSlide();
  };
  
  return (
   <div className='wrapper' style={{  margin: '3rem auto 5rem'}}>
      <div
        className='carousel'
        ref={carouselRef}
        onMouseDown={dragStart}
        onTouchStart={dragStart}
        onMouseMove={dragging}
        onTouchMove={dragging}
        onMouseUp={dragStop}
        onTouchEnd={dragStop}
      >
 
        <img src='https://images.bannerbear.com/direct/EjJywNMlJm5zmerB8a/requests/000/033/000/213/0Mn5r3E1XY0gmWDZQWPoD9kg7/9e42168a169264bb575a5ec10acd1c8942967845.jpg' alt='1' />
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRoX0bj1R0iaXT2KmpbcldfHfnqSh4DzKdOz2NvBpQykc2PD2nLrEX46HzoEu7Mr-gtA&usqp=CAU' alt='2' />
        <img src='https://cdn.pixabay.com/photo/2022/01/28/18/32/leaves-6975462_1280.png' alt='3' />
              <img src='https://images.bannerbear.com/direct/EjJywNMlJm5zmerB8a/requests/000/033/000/213/0Mn5r3E1XY0gmWDZQWPoD9kg7/9e42168a169264bb575a5ec10acd1c8942967845.jpg' alt='1' />
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRoX0bj1R0iaXT2KmpbcldfHfnqSh4DzKdOz2NvBpQykc2PD2nLrEX46HzoEu7Mr-gtA&usqp=CAU' alt='2' />
        <img src='https://cdn.pixabay.com/photo/2022/01/28/18/32/leaves-6975462_1280.png' alt='3' />
      </div>
    </div>
  );
};

export default Carousel