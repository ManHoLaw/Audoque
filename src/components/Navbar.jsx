import gsap from 'gsap';
import { navLists } from '../constants';
import { useEffect, useState, useCallback } from 'react';

const Navbar = ({selection, setSelection}) => {
  
  const handleMouseEnter = useCallback((index, button) => {
    // Apply hover effects for the button
    const isSelected = selection === index;
    gsap.to(button, {
      backgroundPosition: isSelected ? '100% 0%' : '100% 0%',
      color: '#6d8d95',
      duration: 0.5,
      ease: 'power1.inOut',
    });
    gsap.to(button.querySelector('.underline'), {
      scaleX: 1,
      transformOrigin: 'left center',
      duration: 0.5,
      ease: 'power1.out',
    });
  }, [selection]); 


  const handleMouseLeave = useCallback((index, button) => {
    // Only reset the button if it's not selected
    if (selection !== index) {
      gsap.to(button, {
        backgroundPosition: '0% 0%',
        color: 'black',
        ease: 'power1.inOut',
        duration: 0.5,
      });
      gsap.to(button.querySelector('.underline'), {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.5,
        ease: 'power1.out',
      });
    }
  }, [selection]);

  // Handle click event to toggle selection
  const handleClick = (index) => {
    setSelection((prevSelection) => (prevSelection === index ? null : index));
  };

  // Effect to update previously selected button styles immediately
  useEffect(() => {
    // If selection changes, reset the state of all buttons (deselect)
    const buttons = document.querySelectorAll('.menu-item');
    buttons.forEach((button, index) => {
      if (selection !== index) {
        gsap.to(button, {
          backgroundPosition: '0% 0%',
          color: 'black',
          ease: 'power1.inOut',
          duration: 0.5,
        });
        gsap.to(button.querySelector('.underline'), {
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 0.5,
          ease: 'power1.out',
        });
      }
    });
  }, [selection]); // Trigger effect whenever `selection` changes

  return (
    <section class="relative flex justify-center items-center w-full">
      <div class="grid grid-flow-col auto-cols-fr max-md:gap-5 max-sm:text-48px text-xl gap-25">
        {navLists.map((nav, i) => (
          <button
            key={i}
            class="menu-item cursor-pointer relative py-2 w-auto"
            onClick={() => handleClick(i)}
            onMouseEnter={(e) => handleMouseEnter(i, e.currentTarget)}
            onMouseLeave={(e) => handleMouseLeave(i, e.currentTarget)}
          >
            <div id="menu-content" class="flex justify-center">
              {nav}
              <div class="underline absolute bottom-0 left-0 h-0.5 w-full bg-[#4e5f63] scale-x-0 origin-left transition-all duration-500 ease-out rounded" />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Navbar;
