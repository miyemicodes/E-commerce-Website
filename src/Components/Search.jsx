import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RiCloseLine } from 'react-icons/ri';

export default function Search({ onClickSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const searchQuery = e?.target?.value?.toLowerCase();
    setQuery(searchQuery);
  };

  function clickSearch() {
    if (onClickSearch && typeof onClickSearch === 'function') {
      onClickSearch?.(query);
    }
  }

  const clearQuery = () => {
    if (onClickSearch && typeof onClickSearch === 'function') {
      onClickSearch?.('');
    }
	setQuery('')
  }

  return (
    <>
      <div className='w-min flex flex-col items-start gap-2'>
        <div className='flex relative flex-row items-center justify-center py-2 px-1 border rounded-3xl border-[#c0bebe] w-full md:w-4/12 md:min-w-[500px]'>
          <input
            type='text'
            placeholder='Search...'
            value={query}
            onChange={handleSearch}
            className='w-full bg-transparent text-black border-none outline-none block py-1 pl-2 pr-8'
          />
          <button
            onClick={clickSearch}
            className='border-none outline-none absolute z-50 right-[12px] top-[50%] translate-y-[-50%] shrink-0'
          >
            <FaSearch className='text-[#a5a5a5] h-4 w-4' />
          </button>
        </div>
        {query ? (
          <button
            onClick={clearQuery}
            className='bg-red-500 flex gap-1 items-center p-2 rounded-lg hover:bg-red-900'
          >
            <RiCloseLine className='text-white h-4 w-4' />
            <p className='text-white text-md'>clear</p>
          </button>
        ) : null}
      </div>
    </>
  );
}
