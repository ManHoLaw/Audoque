import gsap from 'gsap';
import { extraLists, navLists } from '../constants';
import { useEffect, useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ selection, setSelection, isSidebarOpen, setIsSidebarOpen }) => {
    const isCakeDetailPage = location.pathname.startsWith("/menu");

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
    const navigate = useNavigate();

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
    
        // Reset all buttons before applying animation to the selected one
        const buttons = document.querySelectorAll('.menu-item');
        buttons.forEach((btn, i) => {
            if (i !== index) { // Reset only if not the selected button
                gsap.to(btn, {
                    color: 'black',
                    duration: 0.3,
                    ease: 'power1.inOut',
                });
    
                gsap.to(btn.querySelector('.underline'), {
                    scaleX: 0,
                    transformOrigin: 'left center',
                    duration: 0.3,
                    ease: 'power1.out',
                });
            }
        });
    
        // Determine the next selection state before updating
        const nextSelection = selection === index ? null : index;
        setSelection(nextSelection);
    
        // Animate the current button (either highlighted or reset)
        gsap.to(button, {
            color: nextSelection === null ? 'black' : '#6d8d95', // Reset to black when deselected
            duration: 0.3,
            ease: 'power1.inOut',
        });
    
        gsap.to(button.querySelector('.underline'), {
            scaleX: nextSelection === null ? 0 : 1, // Hide underline if deselected
            transformOrigin: 'left center',
            duration: 0.3,
            ease: 'power1.out',
        });
    };
    
    const [cake, setCake] = useState(false)

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
            {/* Side bar */}
            {isSidebarOpen && (
                <button className="z-3 fixed inset-0 bg-gray-900/50 flex justify-start" onClick={() => setIsSidebarOpen(false)}>
                    <div className="bg-black/50 flex flex-col gap-1 w-full h-full p-3 shadow-lg" onClick={(e) => e.stopPropagation()}>
                        <button className="bg-white p-2 rounded-xl mb-5 cursor-pointer self-start" onClick={() => setIsSidebarOpen(false)}>
                            Close
                        </button>
                        <button class='menu-item block w-full text-left p-3 text-lg rounded-md cursor-pointer bg-[#DCB465]'
                        onClick={()=>setCake(!cake)}
                        >
                            Cake
                        </button>
                            {cake && (
                            <div class='pl-5'>
                                {navLists.map((nav, i) => (
                                    <Link
                                        key={i}
                                        to={'/menu'}
                                        className={`menu-item block w-full text-left cursor-pointer p-3 text-lg rounded-md ${
                                            selection === i ? 'bg-[#6d8d95] text-white/50' : 'bg-[#DCB465]'
                                        }`}
                                        onClick={(e) => {
                                            handleClick(i, e.currentTarget);
                                            setIsSidebarOpen(false);
                                            setTimeout(() => {
                                                navigate('/');
                                            }, 300);
                                        }}
                                    >
                                        {nav}
                                    </Link>
                                ))}
                            </div>
                        )}
                            
                        {extraLists.map((info, j) => (
                            <Link
                                key={j}
                                to={`/${encodeURIComponent(info.toLowerCase().replace(/\s+/g, '-'))}`}
                                className='block w-full text-left p-3 text-lg cursor-pointer rounded-md bg-[#DCB465]'
                                onClick={(e) => {
                                    // handleClick(j, e.currentTarget); // Handle the button animation first
                                    setIsSidebarOpen(false);
                                    setSelection(false);
                                    setTimeout(() => {
                                        navigate(`/${encodeURIComponent(info.toLowerCase().replace(/\s+/g, '-'))}`); // Perform the navigation after the animation
                                    }, 300); // Wait for the animation duration
                                }}
                            >
                                {info}
                            </Link>
                        ))}
                    </div>
                </button>
            )}


            {/* Normal */}
            {isCakeDetailPage && (<div className={`${isSidebarOpen ? 'hidden' : 'grid'} max-sm:hidden sm:grid-flow-col auto-cols-fr max-md:gap-5 text-xl gap-6`}>
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
            </div>)}
        </section>
    );
};

export default Navbar;
