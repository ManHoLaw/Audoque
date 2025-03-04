import { useLocation, useNavigate } from "react-router-dom"
import { bannerImg, bannersmallImg } from "../utils"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

const Logo = ({ setSelection, isAnimating, setIsAnimating }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const handleLogoClick = () => {
        if (isAnimating) return
        setSelection(null)
        navigate('/')
    }
    const isHomePage = location.pathname === '/'

    const logoRef = useRef(null)
    useEffect(()=>{
        if (isHomePage){
            setIsAnimating(true)
            gsap.fromTo(
                logoRef.current,
                {scale:2,y:"40vh", opacity:1},
                {scale:1, y:0, opacity:1, duration:1.5, delay:2, ease:'power2.out',
                    onComplete: () => setIsAnimating(false)}
            )
        }else{
            setIsAnimating(false);
        }
    },[isHomePage])

  return (
    <section>
        <h1 ref={logoRef} class='w-full flex justify-center top-0 left-0 right-0 z-1'>
            <div class='flex items-baseline max-sm:justify-center max-sm:flex-none max-sm:hidden p-5 md:p-10'>
                <button class='cursor-pointer rounded-3xl' onClick={handleLogoClick}>
                    <img src={bannerImg} alt='Au_banner' width={300}/>
                </button>
            </div>
            <div class='flex items-baseline max-sm:justify-center sm:hidden max-sm:flex-2 p-2'>
                <button class='cursor-pointer rounded-3xl' onClick={handleLogoClick}>
                    <img src={bannersmallImg} alt='Au_banner' width={200} />
                </button>
            </div>
        </h1>
    </section>
  )
}

export default Logo