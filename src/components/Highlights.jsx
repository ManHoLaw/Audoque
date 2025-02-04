
import { cakes, navLists } from "../constants"

const Highlights = ({selection}) => {
  const isChefSelection = navLists[selection] === "Chef's Selection"
  const isCake = navLists[selection] === "Cake"
  const isRoll= navLists[selection] === "Roll"

  return (
    <section class="flex justify-center overflow-hidden h-full">
        <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 content-evenly gap-4 sm:py-10 pb-10">
              {cakes.filter((cake)=>{
                if (isChefSelection) return cake.chefSelection
                if (isCake) return cake.type === 'cake'
                if (isRoll) return cake.type === 'roll'
                return true
              })
              .map((cake) => (
                <button key={cake.id} class='rounded-lg overflow-hidden items-center cursor-pointer flex flex-col'>
                  <img 
                    src={cake.img}
                    alt={cake.title}
                    class='h-auto max-sm:object-cover flex max-w-50 w-1/2 rounded-2xl'
                  />
                  <div class='p-4'>
                    <h3 class='flex text-lg '>{cake.title}</h3>
                  </div>
                </button>
              ))}
        </div>
    </section>
  )
}

export default Highlights