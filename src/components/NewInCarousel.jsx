import { useState, useEffect, useRef } from "react";
import { newInLists, newInTitlewLists } from "../constants";
import { backIconImg, nextIconImg } from "../utils";
import { gsap } from "gsap";

const NewInCarousel = () => {
  const images = newInLists;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); 
  const intervalRef = useRef(null);
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const directionRef = useRef(1); // Use ref to track direction outside of state

  const handleNext = () => {
    if (isAnimating) return; // Prevent action if animation is in progress
    const newDirection = -1; // Next direction
    directionRef.current = newDirection; // Immediately set the direction to next
    cancelAnimation(); // Cancel any ongoing animation
    animateOut(newDirection, () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      animateIn(newDirection); // Animate in the new image
    });
    resetAutoSlide(); // Reset the auto-slide timer on user interaction
  };

  const handlePrev = () => {
    if (isAnimating) return; // Prevent action if animation is in progress
    const newDirection = 1; // Previous direction
    directionRef.current = newDirection; // Immediately set the direction to previous
    cancelAnimation(); // Cancel any ongoing animation
    animateOut(newDirection, () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      animateIn(newDirection); // Animate in the new image
    });
    resetAutoSlide(); // Reset the auto-slide timer on user interaction
  };

  // Cancel the ongoing animation
  const cancelAnimation = () => {
    if (containerRef.current) {
      gsap.killTweensOf(containerRef.current); // This kills any existing tweens (animations)
    }
  };

  const animateOut = (direction, onComplete) => {
    if (containerRef.current) {
      setIsAnimating(true);
      gsap.to(containerRef.current, {
        opacity: 0, // Fade out the current image
        x: direction * 500, // Slide out far left (-500) or far right (500)
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          onComplete(); // After index update, call the completion function
        }
      });
    }
  };

  const animateIn = (direction) => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, x: direction * -500 }, // New image enters from right (500) or left (-500)
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.inOut", onComplete: () => setIsAnimating(false) }
      );
    }
  };

  const resetAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Clear previous interval
    }

    intervalRef.current = setInterval(() => {
      handleNext();
    }, 5000);
  };

  useEffect(() => {
    // Initialize the auto-slide interval on mount
    resetAutoSlide();

    return () => {
      clearInterval(intervalRef.current); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="relative bg-white h-auto flex flex-row justify-center max-w-[700px] p-5 items-center overflow-hidden">
      {/* Back Icon */}
      <button onClick={handlePrev} class='flex-shrink-0'>
        <img src={backIconImg} className="w-5" alt="Back" />
      </button>

      {/* Image & Title */}
      <div ref={containerRef} className="flex items-center w-full p-5">
        <div class='w-[500px] h-[500px] flex justify-center flex-col items-center'>
          <img
            ref={imgRef}
            src={images[currentIndex]}
            className="max-w-full max-h-full object-contain rounded-3xl"
            alt="New In"
          />
          <div className="py-5 text-center">{newInTitlewLists[currentIndex]}</div>
        </div>
      </div>

      {/* Next Icon */}
      <button onClick={handleNext} class='flex-shrink-0'>
        <img src={nextIconImg} className="w-5" alt="Next" />
      </button>
    </div>
  );
};

export default NewInCarousel;
