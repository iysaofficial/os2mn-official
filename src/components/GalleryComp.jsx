import '../assets/css/Gallery.css';
import React, { useEffect, useRef } from "react";

const GalleryComp = () => {
  const carouselRef = useRef(null);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);
  const firstImageRef = useRef(null);

  let isDragging = false;
  let startX = 0;
  let scrollStart = 0;
  let scrollDiff = 0;

  useEffect(() => {
    const carousel = carouselRef.current;
    const firstImage = firstImageRef.current;
    const leftArrow = leftArrowRef.current;
    const rightArrow = rightArrowRef.current;

    if (!carousel || !firstImage || !leftArrow || !rightArrow) return;

    const toggleArrowIcons = () => {
      const maxScroll = Math.round(carousel.scrollWidth - carousel.clientWidth);
      leftArrow.style.display = carousel.scrollLeft <= 0 ? "none" : "block";
      rightArrow.style.display = Math.round(carousel.scrollLeft) >= maxScroll ? "none" : "block";
    };

    const scrollCarousel = (direction) => {
      const cardWidth = firstImage.clientWidth + 14;
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;
      const scrollAmount = direction === "right" ? cardWidth : -cardWidth;
      carousel.scrollLeft = Math.min(Math.max(carousel.scrollLeft + scrollAmount, 0), maxScroll);
      toggleArrowIcons();
    };

    const autoCenterImage = () => {
      const cardWidth = firstImage.clientWidth + 14;
      const offset = carousel.scrollLeft % cardWidth;
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;
      if (carousel.scrollLeft > 0 && carousel.scrollLeft < maxScroll) {
        if (offset > cardWidth / 3) {
          carousel.scrollLeft += cardWidth - offset;
        } else {
          carousel.scrollLeft -= offset;
        }
      }
      toggleArrowIcons();
    };

    const startDragging = (event) => {
      isDragging = true;
      startX = event.pageX || event.touches[0].pageX;
      scrollStart = carousel.scrollLeft;
      carousel.classList.add("dragging");
    };

    const duringDrag = (event) => {
      if (!isDragging) return;
      const currentX = event.pageX || event.touches[0].pageX;
      scrollDiff = currentX - startX;
      carousel.scrollLeft = scrollStart - scrollDiff;
    };

    const stopDragging = () => {
      if (!isDragging) return;
      isDragging = false;
      carousel.classList.remove("dragging");
      if (Math.abs(scrollDiff) > 10) {
        autoCenterImage();
      }
    };

    const onLeftClick = () => scrollCarousel("left");
    const onRightClick = () => scrollCarousel("right");

    // Inisialisasi awal
    toggleArrowIcons();

    // Event listeners
    leftArrow.addEventListener("click", onLeftClick);
    rightArrow.addEventListener("click", onRightClick);
    carousel.addEventListener("mousedown", startDragging);
    carousel.addEventListener("touchstart", startDragging);
    document.addEventListener("mousemove", duringDrag);
    document.addEventListener("mouseup", stopDragging);
    carousel.addEventListener("touchmove", duringDrag);
    carousel.addEventListener("touchend", stopDragging);
    carousel.addEventListener("scroll", toggleArrowIcons);

    // Cleanup
    return () => {
      leftArrow.removeEventListener("click", onLeftClick);
      rightArrow.removeEventListener("click", onRightClick);
      carousel.removeEventListener("mousedown", startDragging);
      carousel.removeEventListener("touchstart", startDragging);
      document.removeEventListener("mousemove", duringDrag);
      document.removeEventListener("mouseup", stopDragging);
      carousel.removeEventListener("touchmove", duringDrag);
      carousel.removeEventListener("touchend", stopDragging);
      carousel.removeEventListener("scroll", toggleArrowIcons);
    };
  }, []);


  return (
    <section className="gallery-section">
      <div className="gallery-wrapper">
        <i id="left" className="fa-solid fa-angle-left" ref={leftArrowRef}></i>
        <div className="gallery-carousel" ref={carouselRef}>
          <img src="./assets/images/gallery/1.jpg" alt="img" draggable="false" ref={firstImageRef} />
          <img src="./assets/images/gallery/2.jpg" alt="img" draggable="false" />
          <img src="./assets/images/gallery/3.PNG" alt="img" draggable="false" />
          <img src="./assets/images/gallery/4.PNG" alt="img" draggable="false" />
          <img src="./assets/images/gallery/5.PNG" alt="img" draggable="false" />
          <img src="./assets/images/gallery/6.PNG" alt="img" draggable="false" />
          <img src="./assets/images/gallery/7.PNG" alt="img" draggable="false" />
          <img src="./assets/images/gallery/8.PNG" alt="img" draggable="false" />
        </div>
        <i id="right" className="fa-solid fa-angle-right" ref={rightArrowRef}></i>
      </div>
    </section>
  );
};

export default GalleryComp;
