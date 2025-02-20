import { Link } from 'react-router-dom'
import { homepageImg, instaIconImg, menuIconImg, newInImg } from '../utils'
import { cakes } from "../constants"


const Homepage = () => {
  
  
  return (
    <section className="flex flex-col justify-center items-center w-full">
      <div class='p-5'>
        <div className="bg-white relative max-h-[400px] w-full flex justify-center overflow-hidden rounded-2xl">
          {/* <img src={homepageImg} className='opacity-50  w-full h-auto aspect-[16/9] object-cover object-center' /> */}
          {cakes.filter(cake => cake.type === 'roll')
            .map((cake, i) => (
              <div key={i} className="flex items-center w-full h-auto aspect-[16/9] object-cover object-center opacity-50">
                <img src={cake.img} alt={cake.title} className="w-auto" />
              </div>
            ))}
          <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-display sm:text-3xl'
          >
            Welcome
          </p>
        </div>
        <Link
          to={'/menu'}
          className='relative flex justify-center items-center py-15 text-xl cursor-pointer'
        >
          <div class=''>View </div>
          <img src={menuIconImg} class='rounded-2xl w-20 relative' />
        </Link>
        <div className="relative bg-white h-auto flex flex-col justify-start rounded-2xl py-5">
          <p className="text-xl p-5 mx-auto">New In / Chef's Selection</p>
          {/* <img src={newInImg} class='w-1/2 mx-auto' /> */}
          <div className="relative flex flex-row overflow-x-auto space-x-4 p-4 w-full">
            {cakes.filter(cake => cake.chefSelection)
            .map((cake, i) => (
              <div key={i} className="flex items-center mx-auto min-w-[6rem]">
                <img src={cake.img} alt={cake.title} className="w-48" />
              </div>
            ))}
          </div>
        </div>

      </div>
      <div class='flex flex-row items-center'>
        Follow us on 
        <a href="https://www.instagram.com/audoque_patisserie/" class='flex items-center'>
          <img src={instaIconImg} class='w-8 mr-2' />
          <p class='inline'>@audoque_patisserie</p>
          
        </a>
      </div>
      
    </section>
  )
}

export default Homepage