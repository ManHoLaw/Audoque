import { bagImg, searchImg } from "../utils"

const Title = () => {
  return (
    <header class=''>
        <nav class='w-full screen-max-width'>
            <div class='fixed top-4 right-4 flex item-baseline gap-5 justify-end flex-1'>
                <a class='cursor-pointer rounded-3x1'>
                    <img src={searchImg} alt='search' width={20} />
                </a>
                <a class='cursor-pointer rounded-3x1'>
                    <img src={bagImg} alt='bag' width={20} />
                </a>
            </div>
        </nav>
    </header>
  )
}

export default Title
