import React from "react";
import { FaArrowRightArrowLeft, FaCartArrowDown } from "react-icons/fa6";

export default function Button() {
  return (
    <>
      <button className="bg-[#967f50] text-sm flex items-center justify-center gap-2 px-6 py-2 text-[#fbf3e2] border border-[#fbf3e2] rounded-sm w-36">
        <p>Shop Now</p>
        <FaCartArrowDown />
      </button>
    </>
  );
}