import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { cakes } from "../constants"

const Highlights = () => {
  return (
    <section class="w-screen overflow-hidden h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-10">
              {cakes.map((cake) => (
                <button key={cake.id} class='rounded-lg overflow-hidden justify-center items-center cursor-pointer flex flex-col'>
                  <img 
                    src={cake.img}
                    alt={cake.title}
                    class='h-auto max-sm:object-cover flex max-w-100 justify-center w-full'
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