import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";

export function CartCard() {
  return (
    <>
      <div className="bg-white border-none rounded-md p-2">
        <div className="flex items-start justify-start gap-2">
          <div className="h-[100px] w-[150px]">
            <img src="" className="h-[100px] w-[100px] object-cover" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[12px] text-[#616160]">
              Diamond Boxed Ring with Rose gold inscriptions and Emerald Stones
            </p>
            <p className="text-[#8a8b85] text-[12px]">
              Seller : Perfecte Stones
            </p>
            <div>
              <span className="font-semibold"> $6007 </span>
              <span className="line-through text-[#787973]"> $10,000</span>
            </div>
            <span className="text-[#8a8b85] text-[12px]">In Stock</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2 p-1 text-[#d1ab6c] hover:border-[#d1ab6c] hover:border-2">
            <GoTrash />
            <p className="font-semibold">REMOVE</p>
          </button>

          <div className="flex items-center gap-7">
            <FaMinus className="bg-[#d1ab6c] text-white text-2xl p-1 rounded-md" />
            <span className="font-semibold"> 2 </span>
            <FaPlus className="bg-[#d1ab6c] text-white text-2xl p-1 rounded-md" />
          </div>
        </div>
      </div>
    </>
  );
}
