import { useState } from "react";
import { bagImg, searchImg } from "../utils"
import { Menu,  } from 'lucide-react'
import SearchBar from "./Searchbar";

const Title = ({isSidebarOpen, setIsSidebarOpen, popupCake, setPopupCake }) => {

    const [showSearch, setShowSearch] = useState(false)
    const [showSearchImg, setShowSearchImg] = useState(true)

    const handleClick = () => {
        setShowSearch(!showSearch)
        setShowSearchImg(!showSearchImg)
    }

  return (
    <header class=''>
        <nav class='w-full screen-max-width'>
            <nav class='relative w-full'>
                <div class='fixed sm:hidden flex justify-between items-center p-4'>
                    <button class='cursor-pointer' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <Menu size={20} /> 
                        
                    </button>  
                </div>    
            </nav>


            <div class='fixed top-4 right-4 flex item-baseline gap-5 justify-end flex-1'>
                <a class='cursor-pointer rounded-3x1'>
                    {showSearchImg && <img src={searchImg} alt='search' width={20} onClick={handleClick}/>}
                    {showSearch && 
                        <SearchBar handleClick={handleClick} 
                        popupCake={popupCake}
                        setPopupCake={setPopupCake} 
                        />
                    }
                </a>
                {/* <a class='cursor-pointer rounded-3x1 '>
                    <img src={bagImg} alt='bag' width={20} />
                </a> */}
            </div>
        </nav>
    </header>
  )
}

export default Title
