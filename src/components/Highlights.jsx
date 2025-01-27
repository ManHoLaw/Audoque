import { useGSAP } from "@gsap/react"
import gsap from "gsap"
// import { rightImg, watchImg } from "../utils"
import VideoCarousel from "./VideoCarousel"

const Highlights = () => {
    // useGSAP(() => {
    //     gsap.to("#title", {opacity:1, y: 0,})
    //     gsap.to(".link", {opacity: 1, y: 0, duration:1, stagger: 0.25})
    // }, [])
  return (
    <section class="w-screen overflow-hidden h-full">
        <div class="screen-max-width">
            <div class="mb-12 w-full md:flex items-end justify-between">
                <h1>Get the highlights.</h1>
                <div class="flex flex-wrap items-end">
                </div>
            </div>

            <VideoCarousel />
        </div>
    </section>
  )
}

export default Highlights