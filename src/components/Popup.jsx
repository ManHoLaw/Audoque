
const Popup = ({ closePopup, cake }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center"
    style={{ backgroundColor: 'rgba(51, 51, 51, 0.5)' }} >
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <h2>
          <img
                  src={cake.img}
                  alt={cake.title}
                  class="h-auto max-sm:object-cover flex max-w-100 rounded-2xl cursor-pointer max-sm:max-w-75"
                />
        </h2>
        <button onClick={closePopup} className="mt-2 px-4 py-2 bg-red-500 text-white rounded">
          Close
        </button>
      </div>
    </div>
);
}

export default Popup