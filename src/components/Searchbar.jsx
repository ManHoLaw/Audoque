import React, { useEffect, useRef, useState } from 'react';
import { closeIconImg } from '../utils';
import { cakes } from '../constants';

const SearchBar = ({handleClick, popupCake, setPopupCake}) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search query:', query); // Handle search logic here
  };

  const inputRef = useRef(null);

  const filteredCakes = cakes.filter((cake) => {
    const searchWords = query.toLowerCase().split(' ').filter(Boolean); // Split query into words
    return searchWords.every(word => cake.title.toLowerCase().includes(word));
  });
  

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [])
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClick(); // Call the function to close search
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClick]);


  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSearch} className="flex items-center border border-gray-300 rounded-t-lg shadow-md p-2 bg-white gap-3">
        <img src={closeIconImg} width={20} onClick={handleClick} class='cursor-pointer' />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search..."
          className="flex-grow p-2 text-gray-700 border-none outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
        />
        {/* <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button> */}
      </form>

      <div className="bg-white rounded-b-2xl" >
          {filteredCakes.length > 0 ? (
            <ul className="space-y-2">
              {filteredCakes.map((cake) => (
                <li key={cake.id} className="p-2 border-b border-gray-300 flex gap-5" 
                onClick={() => {setPopupCake(cake); handleClick()}}
                >
                  <img src={cake.img} width={50}  className='flex rounded-md' />
                  <span className="font-semibold flex items-center">{cake.title}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className=" text-gray-500 p-2">No cakes found</p>
          )}
        </div>
    </div>
  );
};

export default SearchBar;
