import { Link } from 'react-router-dom';
import { homepageImg } from '../utils';
import NewInCarousel from './NewInCarousel';

const Homepage = ({ isAnimating, setIsAnimating }) => {

  // If isAnimating is true, don't render the Homepage content yet
  if (isAnimating) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-white">
        
      </div>
    );
  }

  return (
    <section className="flex flex-col justify-center items-center w-full z-[-1]">
      <div className="w-full">
        {/* Homepage Image  */}
        <div className="bg-white relative w-full flex justify-center overflow-hidden">
          <img src={homepageImg} className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="relative flex flex-col justify-center items-center rounded-2xl w-full py-20">
            {/* Centered Welcome Text */}
            <div className="text-xl sm:text-3xl flex flex-col items-center justify-center text-center w-full">
              <p className="font-fraunces">WELCOME</p>
              <p className="font-didot text-xs sm:text-lg">A bit of sweetness when you wanna ask Au Doque</p>
            </div>

            {/* Centered Order Now Button */}
            <Link
              to={'/menu'}
              className="mt-6 flex justify-center items-center text-xl cursor-pointer"
            >
              <div className="bg-black text-white sm:py-5 sm:px-10 text-xl sm:text-3xl py-3 px-7">
                Order Now
              </div>
            </Link>
          </div>
        </div>

        {/* New In Section */}
        <div className="relative bg-white h-auto flex justify-center flex-col">
          <p className="text-xl pt-10 mx-auto sm:text-3xl font-fraunces">New In</p>
          <div className="relative w-full flex justify-center items-center py-10">
            <NewInCarousel />
          </div>
        </div>

      </div>

      {/* Instagram Section */}
      <div className="flex flex-col items-center py-5 w-full text-lg sm:text-xl">
        Follow us
        <a href="https://www.instagram.com/audoque_patisserie/" className="flex items-center">
          <p className="inline pb-3">@audoque_patisserie</p>
        </a>
        <div className="rounded-xl overflow-hidden">
          <iframe
            src="https://www.instagram.com/audoque_patisserie/embed"
            width="100%"
            height="500"
            frameBorder="1"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            className="rounded-2xl overflow-hidden border-2 p-5"
          >
            Loading…
          </iframe>
        </div>
      </div>

    </section>
  );
};

export default Homepage;
