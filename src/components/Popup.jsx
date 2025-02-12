import { memo } from "react";
import { Prices } from "../constants"

const Popup = memo(({ closePopup, cake }) => {
  const priceObj = Prices.find(
    (p) =>
      p.type === cake.type &&
      (!p.flavour || p.flavour === (cake.flavour ? "Flavoured" : "Original"))
  );

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

        <div class='flex justify-start'>
            Description
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