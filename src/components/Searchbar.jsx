import React, { useEffect, useRef, useState } from 'react';
import { closeIconImg } from '../utils';
import { cakes } from '../constants';

const SearchBar = ({ handleClick, popupCake, setPopupCake }) => {
  const [query, setQuery] = useState('');
  const searchBarRef = useRef(null);
  const inputRef = useRef(null);

  const handleChange = (e) => setQuery(e.target.value);

  const filteredCakes = cakes.filter((cake) => {
    const searchWords = query.toLowerCase().split(' ').filter(Boolean);
    return searchWords.every(word => cake.title.toLowerCase().includes(word));
  });

  // Focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Close search bar on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (searchBarRef.current && !searchBarRef.current.contains(e.target)) {
        handleClick();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [handleClick]);

  // Close search bar on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClick();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleClick]);

  return (
    <div ref={searchBarRef} className="search-bar max-w-md mx-auto inset-0 flex flex-col transition-none relative">
      <form className="flex items-center border border-gray-300 rounded-t-lg shadow-md p-2 bg-white gap-3">
        <img src={closeIconImg} width={10} onClick={handleClick} className="cursor-pointer" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search..."
          className="flex-grow p-2 text-gray-700 border-none outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
        />
      </form>

      {query && (
      <div className="absolute top-full bg-white rounded-b-2xl shadow-lg w-full">
        {filteredCakes.length > 0 ? (
          <ul className="space-y-2">
            {filteredCakes.map((cake) => (
              <li key={cake.id} className="p-2 border-b border-gray-300 flex gap-5 cursor-pointer"
                onClick={() => { setPopupCake(cake); handleClick(); }}>
                <img src={cake.img} width={50} className="flex rounded-md" />
                <span className="font-semibold flex items-center">{cake.title}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 p-2">No cakes found</p>
        )}
        </div>)
      }
    </div>
  );
};

export default SearchBar;
