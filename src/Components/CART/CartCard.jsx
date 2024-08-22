import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";

export function CartCard() {
  return (
    <>
      <div className="bg-white border-none rounded-md">
        <div className="flex items-center justify-start gap-2">
          <div>
            <img src="" />
          </div>
          <div>
            <p></p>
            <p></p>
            <div>
              <span></span>
              <span></span>
            </div>
            <span></span>
          </div>
        </div>
        <div>
          <button>
            <GoTrash />
          </button>

          <div>
            <FaMinus />
            <span> 2 </span>
            <FaPlus />
          </div>
        </div>
      </div>
    </>
  );
}
