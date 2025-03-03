import { memo, useEffect } from "react";
import { Prices } from "../constants"
import { Link } from 'react-router-dom'
import { closeIconImg } from '../utils';

const Popup = memo(({ closePopup, cake }) => {
  const priceObj = Prices.find(
    (p) =>
      p.type === cake.type &&
      (!p.flavour || p.flavour === (cake.flavour ? "Flavoured" : "Original"))
  );

  useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          closePopup();
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [closePopup]);

  return (
    <div class="fixed inset-0 z-1 flex items-center justify-center transition-none " onClick={closePopup}>
      <div class="bg-white p-5 rounded-xl shadow-lg" onClick={(e)=>e.stopPropagation()}>
        <img src={closeIconImg} width={10} onClick={closePopup} className="cursor-pointer pb-3" />
        
        <div class='flex justify-center'>
          <img src={cake.img[0]} alt={cake.title} class="border max-sm:object-cover max-w-80 rounded-2xl max-sm:max-w-50" />
        </div>
        

        <div class='flex justify-center text-2xl'>
          {cake.title}
        </div>

        <div class="flex flex-col my-5 max-w-sm overflow-hidden w-full">
          <span class="break-words whitespace-normal pb-5">
            {cake.description}
          </span>
          <div class='text-xs'>
              Allergens: Gluten, Eggs, Milk, Nuts
          </div>
          <Link
            to={`/${encodeURIComponent(cake.title.toLowerCase().replace(/\s+/g, "-"))}`}
            class="flex justify-end pt-1 rounded text-sm w-fit underline underline-offset-4 self-end"
            onClick={closePopup}
          >
            <span className='text-black/75'>
              More Detail
            </span>
          </Link>
        </div>

        <div class='flex justify-center'>
          {priceObj?.price?.map((price, index) => (
            <button
              key={index}
              class="text-black py-2 px-4 m-1 rounded-lg flex justify-center max-sm:text-[10px] border-1"
            >
              {priceObj.size[index]}: {price}
            </button>
          ))}
        </div>



        
      </div>
    </div>
  );
});


export default Popup