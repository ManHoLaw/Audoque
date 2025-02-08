import { bannerImg, bannersmallImg } from "../utils"

const Logo = () => {
  return (
    <h1 class='w-full flex pb-10 justify-evenly z-[-10]'>
        <div class='flex items-baseline max-sm:justify-start max-sm:flex-none max-sm:hidden pt-20'>
            <button class='cursor-pointer rounded-3xl'>
                <img src={bannerImg} alt='Au_banner' width={300}/>
            </button>
        </div>
        <div class='flex items-baseline max-sm:justify-center sm:hidden max-sm:flex-2 pt-15'>
            <button class='cursor-pointer rounded-3xl'>
                <img src={bannersmallImg} alt='Au_banner' width={300}/>
            </button>
        </div>
    </h1>
  )
}

export default Logo