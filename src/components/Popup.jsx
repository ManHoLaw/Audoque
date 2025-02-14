import { memo, useEffect } from "react";
import { Prices } from "../constants"
import { Link } from 'react-router-dom'

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
    <div class="fixed inset-0 flex items-center justify-center transition-none " onClick={closePopup}>
      <div class="bg-white p-5 rounded-lg shadow-lg" onClick={(e)=>e.stopPropagation()}>
        <button onClick={closePopup} class="mb-2 px-4 py-2 bg-red-500 text-white rounded">
          Close
        </button>
        <div class='flex justify-center'>
          <img src={cake.img} alt={cake.title} class=" max-sm:object-cover max-w-80 rounded-2xl max-sm:max-w-50" />
        </div>
        

        <div class='flex justify-center text-2xl'>
          {cake.title}
        </div>

        <div class="flex flex-col my-5 max-w-sm overflow-hidden">
          <span class="break-words whitespace-normal">
            {cake.description}
          </span>
          <Link
            to={`/cake/${encodeURIComponent(cake.title.toLowerCase().replace(/\s+/g, "-"))}`}
            class="bg-blue-500 text-white px-3 py-1 rounded text-sm mt-2 w-fit"
            onClick={closePopup}
          >
            More Detail
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