import { bagImg, bannerImg, bannersmallImg, searchImg } from "../utils"

const Title = () => {
  return (
    <header class='w-full flex pb-10 justify-evenly'>
        <nav class='flex w-full screen-max-width'>
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
            

            <div class='flex item-baseline gap-5 justify-end flex-1 pr-5'>
                <button class='cursor-pointer rounded-3x1'>
                    <img src={searchImg} alt='search' width={20} />
                </button>
                <button class='cursor-pointer rounded-3x1'>
                    <img src={bagImg} alt='bag' width={20} />
                </button>

            </div>
        </nav>
    </header>
  )
}

export default Title
