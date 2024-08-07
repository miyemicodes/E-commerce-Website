import React from "react";
import { BsTransparency } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { MdSafetyCheck } from "react-icons/md";

export default function Property() {
  return (
    <>
      <section className="px-24 py-4">
        <div className="grid grid-cols-2 items-center justify-center gap-3 py-16 md:grid-cols-4  lg:divide-x-2 lg:grid-cols-4 lg:gap-0">
          <div className="flex flex-col items-center justify-center gap-2 bg-[#eeeeeb] px-5 py-6 rounded-md lg:rounded-none ">
            <LiaCertificateSolid className="bg-white text-[#d1ab6c] rounded-3xl text-3xl" />
            <h3 className="font-semibold">Certified </h3>
            <span className="text-sm text-center text-[#8a8b85]">
              Available certificate of authencity
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 bg-[#eeeeeb] px-5 py-6 rounded-md lg:rounded-none">
            <MdSafetyCheck className="bg-white text-[#d1ab6c] rounded-3xl text-3xl" />
            <h3 className="font-semibold">Secure </h3>
            <span className="text-sm text-center text-[#8a8b85]">
              Certified marketplace since 2024
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 bg-[#eeeeeb] px-5 py-6 rounded-md lg:rounded-none">
            <FaShippingFast className="bg-white text-[#d1ab6c] rounded-3xl text-3xl" />
            <h3 className="font-semibold">Shipping </h3>
            <span className="text-sm text-center text-[#8a8b85]">
              Free,Fast and reliable worldwide
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 bg-[#eeeeeb] px-5 py-6 rounded-md lg:rounded-none">
            <BsTransparency className="bg-white text-[#d1ab6c] rounded-3xl text-3xl" />
            <h3 className="font-semibold">Transparent </h3>
            <span className="text-sm text-center text-[#8a8b85]">
              Hassle-free return policy for purchase.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
