import React from "react";
import { BsTransparency } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { MdSafetyCheck } from "react-icons/md";

export default function Property() {
  return (
    <>
      <div className="p-12 md:px-16 grid md:grid-cols-2 items-center justify-center gap-5 md:gap-3 lg:grid-cols-4  lg:divide-x-2 lg:gap-0">
        <div className="flex flex-col items-center justify-center gap-2 bg-[#eeeeeb] px-5 py-8 rounded-md lg:rounded-none ">
          <LiaCertificateSolid className="bg-white text-[#d1ab6c] rounded-3xl text-3xl lg:text-5xl" />
          <h3 className="font-semibold lg:text-xl">Certified </h3>
          <span className="text-sm lg:text-base text-center text-[#8a8b85]">
            Available certificate of authencity
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 bg-[#eeeeeb] px-5 py-8 rounded-md lg:rounded-none">
          <MdSafetyCheck className="bg-white text-[#d1ab6c] rounded-3xl text-3xl lg:text-5xl" />
          <h3 className="font-semibold lg:text-xl">Secure </h3>
          <span className="text-sm lg:text-base text-center text-[#8a8b85]">
            Certified marketplace since 2024
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 bg-[#eeeeeb] px-5 py-8 rounded-md lg:rounded-none">
          <FaShippingFast className="bg-white text-[#d1ab6c] rounded-3xl text-3xl lg:text-5xl" />
          <h3 className="font-semibold lg:text-xl">Shipping </h3>
          <span className="text-sm lg:text-base text-center text-[#8a8b85]">
            Free,Fast and reliable worldwide
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 bg-[#eeeeeb] px-5 py-8 rounded-md lg:rounded-none">
          <BsTransparency className="bg-white text-[#d1ab6c] rounded-3xl text-3xl lg:text-5xl" />
          <h3 className="font-semibold lg:text-xl">Transparent </h3>
          <span className="text-sm lg:text-base text-center text-[#8a8b85]">
            Hassle-free return policy.
          </span>
        </div>
      </div>
    </>
  );
}
