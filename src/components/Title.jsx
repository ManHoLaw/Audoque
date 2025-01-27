import { bagImg, bannerImg, bannersmallImg, searchImg } from "../utils"

const Title = () => {
  return (
    <header class='w-full py-5 sm:px-10 px-5 flex justify-evenly'>
        <nav class='flex w-full screen-max-width'>
            <div class='flex item-baseline max-sm:justify-end max-sm:flex-1 max-sm:hidden'>
                <button class='cursor-pointer rounded-3x1'>
                    <img src={bannerImg} alt='Au_banner' width={600}/>
                </button>
            </div>
            <div class='flex item-baseline max-sm:justify-end sm:hidden max-sm: flex-2'>
                <button class='cursor-pointer rounded-3x1'>
                    <img src={bannersmallImg} alt='Au_banner' width={1000}/>
                </button>
            </div>
            

            <div class='flex item-baseline gap-7 max-sm: justify-end max-sm: flex-1 pr-5'>
                <button class='cursor-pointer rounded-3x1'>
                    <img src={searchImg} alt='search' width={30} />
                </button>
                <button class='cursor-pointer rounded-3x1'>
                    <img src={bagImg} alt='bag' width={30} />
                </button>

            </div>
        </nav>
    </header>
  )
}

export default Title
