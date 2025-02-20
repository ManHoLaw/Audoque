import { useState, useEffect, useRef } from "react";
import { newInLists, newInTitlewLists } from "../constants";
import { backIconImg, nextIconImg } from "../utils";
import { gsap } from "gsap";

const NewInCarousel = () => {
  const images = newInLists;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for Next, -1 for Back
  const intervalRef = useRef(null);
  const containerRef = useRef(null);

  const handleNext = () => {
    setDirection(1);
    animateOut(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    });
  };

  const handlePrev = () => {
    setDirection(-1);
    animateOut(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    });
  };

  const animateOut = (onComplete) => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        x: direction * -500, // Move far left (-500) or far right (500)
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete,
      });
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { x: direction * 500, opacity: 0 }, // New image enters from right (500) or left (-500)
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.inOut" }
      );
    }
  }, [currentIndex, direction]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, []);

  return (
    <div className="relative bg-white h-auto flex flex-row justify-center p-5 items-center overflow-hidden">
      {/* Back Icon */}
      <button onClick={handlePrev}>
        <img src={backIconImg} className="w-5" alt="Back" />
      </button>

      {/* Image & Title */}
      <div ref={containerRef} className="flex items-center w-full flex-col">
        <img
          src={images[currentIndex]}
          className="w-1/2 mx-auto rounded-3xl"
          alt="New In"
        />
        <div class='py-5'>
          {newInTitlewLists[currentIndex]}
        </div>
      </div>

      {/* Next Icon */}
      <button onClick={handleNext}>
        <img src={nextIconImg} className="w-5" alt="Next" />
      </button>
    </div>
  );
};

export default NewInCarousel;
