import { Link } from 'react-router-dom'
import { homepageImg } from '../utils'

const Homepage = () => {
  
  return (
    <section className="flex flex-col justify-center items-center w-full">
      <div class='p-5'>
        <div className="relative max-h-[400px] w-full flex justify-center  overflow-hidden rounded-2xl">
          <img src={homepageImg} className='opacity-50  w-full h-auto aspect-[16/9] object-cover object-center' />
          <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl'>
            Welcome
          </p>
        </div>
        <Link
          to={'/menu'}
          className='relative flex justify-center py-30 text-xl cursor-pointer'
        >
            View Menu
        </Link>
      </div>
      <div >
        
      </div>
      
    </section>
  )
}

export default Homepage