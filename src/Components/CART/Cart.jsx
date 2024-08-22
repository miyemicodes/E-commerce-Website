import React from "react";

export function Cart() {
  return (
    <>
      <div className="bg-[#787977] text-start">
        <h1 className="text-[#8a8b85]">CART SUMMARY</h1>
        <div className="flex items-center justify-between bg-white">
          <p className="font-semibold">Subtotal</p>
          <span className="font-bold">$2452639</span>
        </div>
        <p className="text-[#8a8b85]">
          CART <span className="font-semibold">(5 )</span>
        </p>
      </div>
    </>
  );
}
