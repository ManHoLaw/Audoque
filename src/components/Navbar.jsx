import gsap from 'gsap';
import { navLists } from '../constants';
import { useEffect } from 'react';
import Highlights from './Highlights';

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
        <div class="flex flex-1 item-baseline max-md:gap-5 max-sm:text-48px justify-center item-center text-xl gap-20">
            {navLists.map((nav,i) => (
                <a class='menu-item cursor-pointer relative px-4 py-2 w-1/8' key={i}>
                    <div id="menu-content" class='flex justify-center'>
                        {nav}
                    </div>
                    <div class="underline absolute bottom-0 left-0 h-0.5 w-full bg-[#4e5f63] scale-x-0 origin-left transition-all duration-500 ease-out rounded"/>
                </a>
            ))}
        </div>
    </h1>
  )
}

export default Navbar