import { Link, useNavigate, useParams } from 'react-router-dom';
import { cakes, Prices } from '../constants';

const CakeDetail = () => {
  const { title } = useParams(); // Get cake ID from URL
  const cake = cakes.find((c) => c.title.toLowerCase().replace(/\s+/g, "-") === title);
  const navigate = useNavigate();
  const priceObj = Prices.find(
    (p) =>
      p.type === cake.type &&
      (!p.flavour || p.flavour === (cake.flavour ? "Flavoured" : "Original"))
  );

  if (!cake) return <h2 className='font-bold text-2xl'>Cake Not Found</h2>;

  return (
    <section className="px-6 flex flex-col z-0">
        <div className='flex flex-1 justify-center pb-5'>
            <h1 className="text-xl font-bold">{cake.title}</h1>
        </div>

        <div className='flex justify-center'>
            <img src={cake.img} alt={cake.title} className="max-w-100 max-sm:max-w-75 object-cover my-4 rounded-xl" />
        </div>
        <div class='flex justify-end'>
          <Link
              to={'/order-form'}
              className='flex cursor-pointer p-2 rounded-md bg-white'
              onClick={(e) => {
                  setTimeout(() => {
                      navigate('/order-form');
                  }, 300);
              }}
          >
            Order Form
          </Link>
        </div>
        <div className='flex-col gap-3 flex px-6 max-sm:w-full max-sm:max-w-screen w-[calc(100vw*2/5)] my-3 overflow-hidden sm:text-2xl'>
            <p className='break-words whitespace-normal'>
              {cake.description}
            </p>
            <div class='text-xs sm:text-xl'>
              Allergens: Gluten, Eggs, Milk, Nuts
            </div>
        </div>

        <div class='flex justify-center p-5'>
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
