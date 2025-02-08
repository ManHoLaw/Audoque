
const Popup = ({ closePopup }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[100]" >
    <div className="bg-white p-5 rounded-lg shadow-lg z-[200]">
      <h2>Popup Content</h2>
      <button onClick={closePopup} className="mt-2 px-4 py-2 bg-red-500 text-white rounded">
        Close
      </button>
    </div>
  </div>
);


export default Popup