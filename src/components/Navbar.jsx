import gsap from 'gsap';
import { navLists } from '../constants';
import { useEffect, useCallback } from 'react';

const Navbar = ({ selection, setSelection, isSidebarOpen, setIsSidebarOpen }) => {
    const handleMouseEnter = useCallback((index, button) => {
        gsap.killTweensOf(button);
        gsap.killTweensOf(button.querySelector('.underline'));

        gsap.to(button, {
            color: '#6d8d95',
            duration: 0.3,
            ease: 'power1.inOut',
        });

        gsap.to(button.querySelector('.underline'), {
            scaleX: 1,
            transformOrigin: 'left center',
            duration: 0.3,
            ease: 'power1.out',
        });
    }, []);

    const handleMouseLeave = useCallback((index, button) => {
        if (selection !== index) {
            gsap.killTweensOf(button);
            gsap.killTweensOf(button.querySelector('.underline'));

            gsap.to(button, {
                color: 'black',
                duration: 0.3,
                ease: 'power1.inOut',
            });

            gsap.to(button.querySelector('.underline'), {
                scaleX: 0,
                transformOrigin: 'left center',
                duration: 0.3,
                ease: 'power1.out',
            });
        }
    }, [selection]);

    const handleClick = (index, button) => {
        gsap.killTweensOf(button);
        gsap.killTweensOf(button.querySelector('.underline'));

        setSelection((prevSelection) => (prevSelection === index ? null : index));

        // Ensure the clicked button stays highlighted
        gsap.to(button, {
            color: '#6d8d95',
            duration: 0.3,
            ease: 'power1.inOut',
        });

        gsap.to(button.querySelector('.underline'), {
            scaleX: 1,
            transformOrigin: 'left center',
            duration: 0.3,
            ease: 'power1.out',
        });
    };

    useEffect(() => {
        const buttons = document.querySelectorAll('.menu-item');
        buttons.forEach((button, index) => {
            if (selection !== index) {
                gsap.killTweensOf(button);
                gsap.killTweensOf(button.querySelector('.underline'));

                gsap.to(button, {
                    color: 'black',
                    duration: 0.3,
                    ease: 'power1.inOut',
                });

                gsap.to(button.querySelector('.underline'), {
                    scaleX: 0,
                    transformOrigin: 'left center',
                    duration: 0.3,
                    ease: 'power1.out',
                });
            }
        });
    }, [selection]);
    

    return (
        <section className="bg-[#dbafaf] flex justify-center items-center w-full">
            {isSidebarOpen && (
                <button className="fixed inset-0 bg-gray-900/50 flex justify-start" onClick={() => setIsSidebarOpen(false)}>
                    <div className="bg-white/50 w-64 h-full p-5 shadow-lg" onClick={(e) => e.stopPropagation()}>
                        <button className="flex mb-5 justify-start" onClick={() => setIsSidebarOpen(false)}>Close</button>
                        {navLists.map((nav, i) => (
                            <button
                                key={i}
                                className={`block w-full text-left p-3 text-lg rounded-md ${
                                    selection === i ? 'bg-[#6d8d95] text-white/50' : 'bg-[#DCB465]'
                                }`}
                                onClick={(e) => handleClick(i, e.currentTarget)}
                            >
                                {nav}
                            </button>
                        ))}
                    </div>
                </button>
            )}
            <div className={`${isSidebarOpen ? 'hidden' : 'grid'} max-sm:hidden sm:grid-flow-col auto-cols-fr max-md:gap-5 text-xl gap-6`}>
                {navLists.map((nav, i) => (
                    <button
                        key={i}
                        className="menu-item cursor-pointer py-2 w-auto relative z-0"
                        onClick={(e) => handleClick(i, e.currentTarget)}
                        onMouseEnter={(e) => handleMouseEnter(i, e.currentTarget)}
                        onMouseLeave={(e) => handleMouseLeave(i, e.currentTarget)}
                    >
                        {nav}
                        <span className="underline absolute bottom-0 left-0 h-0.5 w-full bg-[#4e5f63] scale-x-0 origin-left transition-transform duration-500 ease-out" />
                    </button>
                ))}
            </div>
        </section>
    );
};

export default Navbar;
