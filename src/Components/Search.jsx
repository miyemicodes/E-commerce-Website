import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <>
      <div className=" flex flex-row items-center justify-center w-8 py-2 px-1 border rounded-3xl border-[#c0bebe] md:w-60">
        <input
          type="text"
          placeholder="Search..."
          className="hidden bg-transparent border-none outline-none md:block lg:block"
        />
        <FaSearch className="text-[#a5a5a5]" />
      </div>
    </>
  );
}

