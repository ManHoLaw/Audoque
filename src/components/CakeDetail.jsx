import { useParams } from 'react-router-dom';
import { cakes, Prices } from '../constants';

const CakeDetail = () => {
  const { title } = useParams(); // Get cake ID from URL
  const cake = cakes.find((c) => c.title.toLowerCase().replace(/\s+/g, "-") === title);
  const priceObj = Prices.find(
    (p) =>
      p.type === cake.type &&
      (!p.flavour || p.flavour === (cake.flavour ? "Flavoured" : "Original"))
  );

  if (!cake) return <h2 className='font-bold text-2xl'>Cake Not Found</h2>;

  return (
    <section className="px-6 flex items-center flex-col">
        <div className='flex flex-1 pb-5'>
            <h1 className="text-xl font-bold">{cake.title}</h1>
        </div>


        <div className='flex-1'>
            <img src={cake.img} alt={cake.title} className="max-w-100 max-sm:max-w-75 object-cover my-4 rounded-xl" />
        </div>
        <div className='flex-1 px-6 max-sm:w-full max-sm:max-w-screen w-[calc(100vw*2/5)] my-5 overflow-hidden'>
            <p className='break-words whitespace-normal'>{cake.description}</p>
        </div>



        <div class='flex justify-center'>
          {priceObj?.price?.map((price, index) => (
            <button
              key={index}
              class="text-black py-2 px-4 m-1 rounded-lg flex justify-center max-sm:text-[10px] border-1 bg-white"
            >
              {priceObj.size[index]}: {price}
            </button>
          ))}
        </div>
    </section>
  );
};

export default CakeDetail;
