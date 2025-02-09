import { useRef, useState } from "react";
import { cakes, navLists, cakePrice, rollCakePrice, basqueCakePrice } from "../constants";
import Popup from "./Popup";

const Highlights = ({ selection }) => {
  const isChefSelection = navLists[selection] === "Chef's Selection";
  const isCake = navLists[selection] === "Cake";
  const isRoll = navLists[selection] === "Roll";
  const isBasque = navLists[selection] === "Basque Cake";
  const [popupCake, setPopupCake] = useState(null);
  
  // 🔹 Store multiple refs using an array
  const imgRefs = useRef([]);

  return (
    <section className="flex justify-center overflow-hidden h-full pt-5">
      <div className="w-3/4 grid grid-cols-2 md:grid-cols-3 content-evenly gap-4 sm:py-10 pb-10">
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
            const price =
              cake.type === "cake"
                ? cakePrice
                : cake.type === "roll"
                ? rollCakePrice
                : cake.type === "basquecake"
                ? basqueCakePrice
                : [];

            return (
              <div key={cake.id} className="rounded-lg overflow-hidden items-center flex flex-col">
                {/* Cake Image */}
                <img
                  ref={(el) => (imgRefs.current[index] = el)} // 🔹 Store ref properly
                  src={cake.img}
                  alt={cake.title}
                  className="h-auto max-sm:object-cover flex max-w-50 w-1/2 rounded-2xl cursor-pointer max-sm:max-w-100"
                  onClick={() => setPopupCake(cake)}
                />

                {/* Cake Details */}
                <div className="p-3">
                  <h3 className="flex justify-center text-lg cursor-pointer max-sm:text-[16px]">
                    {cake.title}
                  </h3>

                  {/* Button for Sizes & Prices */}
                  <div className="w-full flex flex-1 justify-center">
                    {price
                      .filter((priceObj) => {
                        if (cake.type === "basquecake") {
                          return cake.flavour ? priceObj.flavour === "Flavoured" : priceObj.flavour === "Original";
                        }
                        return true;
                      })
                      .map((priceObj, index) => (
                        <button
                          key={index}
                          className="text-black py-2 px-4 m-1 rounded-lg flex justify-center max-sm:text-[16px]"
                        >
                          {priceObj.price}
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
