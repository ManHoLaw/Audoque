import gsap from 'gsap';
import { navLists } from '../constants';
import { useEffect } from 'react';

const Navbar = () => {
    useEffect(() => {
        const buttons = document.querySelectorAll('.menu-item');
        buttons.forEach((button) => {   
            
            button.addEventListener('mouseenter', () => {
                gsap.to(button, {
                backgroundPosition: "100% 0%",
                color: '#6d8d95',
                ease: "power1.inOut",
                duration: 0.5,
                });
                gsap.to(button.querySelector('.underline'), {
                    scaleX: 1,
                    transformOrigin: 'left center',
                    duration: 0.5,
                    ease: 'power1.out',
                });
            });
    
            button.addEventListener('mouseleave', () => {
                gsap.to(button, {
                backgroundPosition: "0% 0%",
                color: "black",
                ease: "power1.inOut",
                duration: 0.5,
                });
                gsap.to(button.querySelector('.underline'), {
                    scaleX: 0,
                    transformOrigin: 'left center',
                    duration: 0.5,
                    ease: 'power1.out',
                });
            });
        });
      }, []);
  return (
    <h1 classs=''>
        <div class="flex flex-1 item-baseline max-md:gap-5 max-sm:text-base justify-center text-xl gap-40 flex-wrap">
            {navLists.map((nav,i) => (
                <button  class='menu-item cursor-pointe relative px-4 py-2' key={i}>
                    <div id="menu-content">
                        {nav}
                    </div>
                    <div class="underline absolute bottom-0 left-0 h-0.5 w-full bg-[#4e5f63] scale-x-0 origin-left transition-all duration-500 ease-out rounded"/>
                </button>
            ))}
        </div>
    </h1>
    
  )
}

export default Navbar