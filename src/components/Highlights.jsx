import { Calendar } from "lucide-react";
import { cakes, navLists, cakeSize, rollCakeSize, basqueCakeSize } from "../constants";

const Highlights = ({ selection }) => {
  const isChefSelection = navLists[selection] === "Chef's Selection";
  const isCake = navLists[selection] === "Cake";
  const isRoll = navLists[selection] === "Roll";
  const isBasque = navLists[selection] === "Basque Cake";

  return (
    <section class="flex justify-center overflow-hidden h-full">
      <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 content-evenly gap-4 sm:py-10 pb-10">
        {cakes
          .filter((cake) => {
            if (isChefSelection) return cake.chefSelection;
            if (isCake) return cake.type === "cake";
            if (isRoll) return cake.type === "roll";
            if (isBasque) return cake.type === "basquecake";
            return true;
          })
          .map((cake) => {
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
              <div key={cake.id} class="rounded-lg overflow-hidden items-center cursor-pointer flex flex-col">
                {/* Cake Image */}
                <img
                  src={cake.img}
                  alt={cake.title}
                  class="h-auto max-sm:object-cover flex max-w-50 w-1/2 rounded-2xl"
                />

                {/* Cake Details */}
                <div class="p-4">
                  <h3 class="flex justify-center text-lg">{cake.title}</h3>

                  {/* Button for Sizes & Prices */}
                  <div class={`mt-2 w-full grid ${cake.type === "roll" ? "grid-cols-3 text-" : "grid-cols-2"} gap-2`}>
                  {sizes.filter((sizeObj)=>{
                      if (cake.type==='basquecake'){
                        return cake.flavour ? sizeObj.flavour ==='Flavoured' : sizeObj.flavour === 'Original'
                      }
                      return true
                    })
                    .map((sizeObj, index) => (
                      <button key={index} class="bg-[#f5d0c5] text-black py-2 px-4 m-1 rounded-lg shadow-md flex justify-center">
                        {sizeObj.size} - {sizeObj.price}
                      </button>
                    ))}
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
