import { memo } from "react";
const Popup = memo(({ closePopup, cake }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center transition-none " onClick={closePopup}>
      <div className="bg-white p-5 rounded-lg shadow-lg" onClick={(e)=>e.stopPropagation()}>
        <h2>
          <img src={cake.img} alt={cake.title} className="h-auto max-sm:object-cover flex max-w-100 rounded-2xl cursor-pointer max-sm:max-w-75" />
        </h2>
        <div class='flex justify-center text-xl'>
          {cake.title}
        </div>
        <button onClick={closePopup} className="mt-2 px-4 py-2 bg-red-500 text-white rounded">
          Close
        </button>
      </div>
    </div>
  );
});


export default Popup