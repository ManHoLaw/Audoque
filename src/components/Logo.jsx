import { useNavigate } from "react-router-dom"
import { bannerImg, bannersmallImg } from "../utils"

const Logo = ({ setSelection }) => {
    const navigate = useNavigate()
    const handleLogoClick = () => {
        setSelection(null)
        navigate('/')
    }

  return (
    <h1 class='w-full flex pb-5 justify-evenly'>
        <div class='flex items-baseline max-sm:justify-start max-sm:flex-none max-sm:hidden p-5'>
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
  )
}

export default Logo