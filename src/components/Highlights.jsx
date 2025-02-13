import { useRef, useState } from "react";
import { cakes, navLists, Prices } from "../constants";
import Popup from "./Popup";

const Highlights = ({ selection, popupCake, setPopupCake }) => {
  const isChefSelection = navLists[selection] === "Chef's Selection";
  const isCake = navLists[selection] === "Cake";
  const isRoll = navLists[selection] === "Roll";
  const isBasque = navLists[selection] === "Basque Cake";
  
  // 🔹 Store multiple refs using an array
  const imgRefs = useRef([]);

  return (
    <section className="flex justify-center overflow-hidden h-full pt-5">
      <div className="w-5/6 grid grid-cols-2 md:grid-cols-3 content-evenly gap-4 sm:py-10 pb-10">
        {cakes
          .filter((cake) => {
            if (isChefSelection) return cake.chefSelection;
            if (isCake) return cake.type === "cake";
            if (isRoll) return cake.type === "roll";
            if (isBasque) return cake.type === "basquecake";
            return true;
          })
          .map((cake, index) => {  // 🔹 Added "index" to track ref
            // Select the right price array based on type
            const priceObj = Prices.find(
              (p) => p.type === cake.type && 
              (!p.flavour || p.flavour === (cake.flavour ? "Flavoured" : "Original")))

            return (
              <div key={cake.id} className="rounded-lg overflow-hidden items-center flex flex-col">
                {/* Cake Image */}
                <img
                  ref={(el) => (imgRefs.current[index] = el)} // 🔹 Store ref properly
                  src={cake.img}
                  alt={cake.title}
                  className="max-sm:object-cover flex max-w-50 w-full rounded-2xl cursor-pointer"
                  onClick={() => setPopupCake(cake)}
                />

                {/* Cake Details */}
                <div className="pt-3">
                  <h3 className="flex justify-center text-lg cursor-pointer max-sm:text-[10px]">
                    {cake.title}
                  </h3>

                  {/* Button for Sizes & Prices */}
                  <div className="w-full flex flex-1 justify-center">
                    {priceObj && (
                      <button className="text-black py-2 px-4 m-1 rounded-lg flex justify-center max-sm:text-[10px]">
                        {priceObj.price[0]} ~ {priceObj.price.at(-1)}
                      </button>
                    )}

                  </div>
              </div>
              </div>
            );
          })}
      </div>
      {popupCake && <Popup closePopup={() => setPopupCake(null)} cake={popupCake}/>}
    </section>
  );
};

export default Highlights;
