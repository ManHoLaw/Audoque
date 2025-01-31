import { bannerImg, bannersmallImg } from "../utils"

const Logo = () => {
  return (
    <h1 class='w-full flex pb-10 justify-evenly'>
        <div class='flex item-baseline max-sm:justify-start max-sm:flex-none max-sm:hidden pl-30 pt-20 max-md:pl-20'>
            <button class='cursor-pointer rounded-3xl'>
                <img src={bannerImg} alt='Au_banner' width={300}/>
            </button>
        </div>
        <div class='flex item-baseline max-sm:justify-end sm:hidden max-sm:flex-2 pl-10 pt-7'>
            <button class='cursor-pointer rounded-3xl'>
                <img src={bannersmallImg} alt='Au_banner' width={500}/>
            </button>
        </div>
    </h1>
  )
}

export default Logo