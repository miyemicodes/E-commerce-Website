import React from "react";
import instaImage1 from "../assets/instapage-image-bracelet.jpg";
import instaImage2 from "../assets/intstapage-image-brooch.jpg";
import instaImage3 from "../assets/instapage-image-diamond.jpg";
import instaImage4 from "../assets/instapage-image-ring.jpg";
import instaImage5 from "../assets/instapage-image-neckpiece.jpg";

export default function Instawall() {
  return (
    <>
      <div className="px-6 py-4 bg-[#fffffc]">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold font-serif text-center pb-3">
          Instagram Wall
        </h2>
        <h3 className="text-sm md:text-base lg:text-lg font-normal text-center pb-12">
          Follow us on instagram and be a part of our sparkling story
        </h3>
        <div className="grid grid-cols-3 gap-2 h-[10%]">
          <img src={instaImage1} />
          <img src={instaImage2} className="h-full object-cover rounded-md" />
          <img src={instaImage5} className="h-full object-cover rounded-md" />
          <img src={instaImage4} className="col-span-2 rounded-md" />
          <img
            src={instaImage3}
            className="col-span-1 h-full object-cover rounded-md"
          />
        </div>
      </div>
    </>
  );
}
