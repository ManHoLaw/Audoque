import { useRef, useState } from "react";
import { cakes, navLists, cakeSize, rollCakeSize, basqueCakeSize } from "../constants";
import Popup from "./Popup";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Highlights = ({ selection }) => {
  const isChefSelection = navLists[selection] === "Chef's Selection";
  const isCake = navLists[selection] === "Cake";
  const isRoll = navLists[selection] === "Roll";
  const isBasque = navLists[selection] === "Basque Cake";
  const [popupCake, setPopupCake] = useState(null);


  return (
    <section class="flex justify-center overflow-hidden h-full pt-5">
      <div className="w-3/4 grid grid-cols-2 md:grid-cols-3 content-evenly gap-4 sm:py-10 pb-10">
        {cakes
          .filter((cake) => {
            if (isChefSelection) return cake.chefSelection;
            if (isCake) return cake.type === "cake";
            if (isRoll) return cake.type === "roll";
            if (isBasque) return cake.type === "basquecake";
            return true;
          })
          .map((cake) => {
            
            const imgRef = useRef(null)
            // Select the right size array based on type
            const sizes =
              cake.type === "cake"
                ? cakeSize
                : cake.type === "roll"
                ? rollCakeSize
                : cake.type === "basquecake"
                ? basqueCakeSize
                : [];

            return (
              <div key={cake.id} class="relative rounded-lg overflow-visable items-center flex flex-col">
                {/* Cake Image */}
                <img
                  ref={imgRef}
                  src={cake.img}
                  alt={cake.title}
                  class="h-auto max-sm:object-cover flex max-w-50 w-1/2 rounded-2xl cursor-pointer"
                  onClick={() => setPopupCake(cake)}
                  onMouseEnter={() => gsap.to(imgRef.current, { scale: 1.2, duration: 0.3, zIndex: 50 })}
                  onMouseLeave={() => gsap.to(imgRef.current, { scale: 1, duration: 0.3 })}
                />

                {/* Cake Details */}
                <div class="p-3">
                  <h3 class="flex justify-center text-lg cursor-pointer" onClick={() => setPopupCake(cake)}>{cake.title}</h3>

                  {/* Button for Sizes & Prices */}
                  <div class='w-full flex flex-1 justify-center'>
                    {sizes.filter((sizeObj)=>{
                      if (cake.type==='basquecake'){
                        return cake.flavour ? sizeObj.flavour ==='Flavoured' : sizeObj.flavour === 'Original'
                      }
                      return true
                    })
                    .map((sizeObj, index) => (
                      <button
                      key={index} 
                      class="text-black py-2 px-4 m-1 rounded-lg flex justify-center"
                      >
                        {sizeObj.price}
                      </button>
                    ))}
                    {popupCake && <Popup closePopup={() => setPopupCake(null)} cake={popupCake} />}


                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Highlights;
