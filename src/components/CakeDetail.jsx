import { Link, useNavigate, useParams } from 'react-router-dom';
import { cakes, Prices } from '../constants';
import { useState } from 'react';

const CakeDetail = () => {
  const { title } = useParams(); // Get cake ID from URL
  const cake = cakes.find((c) => c.title.toLowerCase().replace(/\s+/g, "-") === title);
  const navigate = useNavigate();
  const images = cake.img;
  const [selectedImage, setSelectedImage] = useState(images[0])
  const getFilling = (flavour) => {
    if (flavour.includes("Matcha")) return ["Matcha Panna Cotta / Mochi + £3 each"];
    if (flavour.includes("Sesame")) return ["White Sesame Custard / Mochi + £3 each"];
    if (flavour.includes("Oolong")) return ["Oolong Panna Cotta / Mochi + £3 each"];
    return "Mochi + £3 each"; // Default filling if no match
  };
  
  const priceObj = Prices.find(
    (p) =>
      p.type === cake.type &&
      (!p.flavour || p.flavour === (cake.flavour ? "Flavoured" : "Original"))
  );

  const handleThumbailClick=(image)=>{
    setSelectedImage(image);
  }

  return (
    <section className="px-5 flex flex-col z-0">
      <div class='flex justify-start cursor-pointer'>
        <Link 
          to={'/menu'}
          class='p-2 bg-black text-white mt-5 ml-30'
        >
          Back
        </Link>
      </div>
      <div className="mx-auto pt-5">
        {/* Large Preview Image */}
        <div className=" ">
          <img
            src={selectedImage}
            alt="Preview"
            className="flex flex-1 w-auto rounded-xl max-h-[250px] sm:max-h-[500px] "
          />
        </div>

        {/* Thumbnail Images */}
        <div className=" mt-4 flex space-x-4 overflow-x-auto">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              className="object-cover max-h-[50px] sm:max-h-[100px] rounded-md cursor-pointer transition-all hover:opacity-80"
              onClick={() => handleThumbailClick(image)} // Update preview on click
            />
          ))}
        </div>
      </div>
      
      <div className='flex pt-5 flex-col items-center'>
          <h1 className="text-xl font-bold justify-center">{cake.title}</h1>
          <h2 class='relative justify-start'>
            from {priceObj.price[0]}
          </h2>
      </div>
      
      <div className='flex flex-col gap-3 px-6 w-[40vw my-3 overflow-hidden sm:text-2xl max-sm:w-full ml-30'>
          <div class='text-xs sm:text-xl'>
            Fillings: {getFilling(cake.flavour)}
          </div>
          <p className='break-words whitespace-normal pt-10'>
            Description: {cake.description}
          </p>
          <div class='text-xs sm:text-xl'>
            Ingredients: {cake.ingredients}
          </div>
          <div class='text-xs sm:text-xl'>
            Allergens: Gluten, Eggs, Milk, Nuts
          </div>
      </div>




      <div class='flex justify-end'>
        <Link
            to={'/order-form'}
            className='flex cursor-pointer p-2 bg-black text-white mr-30 mb-5'
            onClick={(e) => {
                setTimeout(() => {
                    navigate('/order-form');
                }, 300);
            }}
        >
          Order Form
        </Link>
      </div>
        
    </section>
    
  );
};

export default CakeDetail;
