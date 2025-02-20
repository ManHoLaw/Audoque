import { Link } from 'react-router-dom'
import { homepageImg, instaIconImg, menuIconImg, newInImg } from '../utils'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'



const Homepage = () => {
    
  return (
    <section className="flex flex-col justify-center items-center w-full z-0">
      <div class='w-full'>
        <div className="bg-white relative w-full flex justify-center overflow-hidden ">
          <img src={homepageImg} className='absolute inset-0 w-full h-full object-cover object-center' />
          <div className="relative flex flex-col justify-center items-center rounded-2xl w-full py-20">
            {/* Centered Welcome Text */}
            <div className="text-xl sm:text-3xl flex flex-col items-center justify-center text-center w-full ">
              <p class='font-fraunces'>WELCOME</p>
              <p className="font-didot text-xs sm:text-lg">A bit of sweetness when you wanna ask Au Doque</p>
            </div>

            {/* Centered Order Now Button */}
            <Link
              to={'/menu'}
              className="mt-6 flex justify-center items-center text-xl cursor-pointer"
            >
              <div className="bg-black text-white py-5 px-10 text-xl sm:text-3xl">
                Order Now
              </div>
            </Link>
          </div>

        </div>
        
        <div className="relative bg-white h-auto flex flex-col justify-start py-5">
          <p className="text-xl pb-3 mx-auto sm:text-3xl font-fraunces">New In</p>
          <img src={newInImg} class='w-1/2 mx-auto rounded-3xl' />
        </div>

      </div>
      <div class='flex flex-col items-center py-5 text-xl sm:text-3xl'>
        Follow us
        <a href="https://www.instagram.com/audoque_patisserie/" class='flex items-center'>
          {/* <img src={instaIconImg} class='w-8 mx-1' /> */}
          <p class='inline pb-3'>@audoque_patisserie</p>
        </a>
        <div class='rounded-xl max-h-[500px] overflow-hidden' >
          <iframe 
            src="https://www.instagram.com/audoque_patisserie/embed" 
            width="100%" 
            height="600" 
            frameborder="0" 
            marginheight="0" 
            marginwidth="0"
            class='rounded-2xl overflow-hidden'
            >
            Loading…
          </iframe>
        </div>
      </div>
      
    </section>
  )
}

export default Homepage