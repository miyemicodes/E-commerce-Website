import React from "react";
import featuredImage from "../assets/featured-image-main-2.jpg";
import Button from "./ShopNow";

export default function Unique() {
  return (
    <>
      <div className="bg-[#fbf3e2] flex items-center justify-center gap-6 p-14 h-full">
        <div className="hidden md:block flex-1 rounded-lg">
          <img
            src={featuredImage}
            className="w-[auto] h-[auto] object-contain rounded-lg"
          />
        </div>

        <div className="flex-1 flex flex-col gap-3">
          <h2 className="text-3xl lg:text-5xl font-normal font-serif">
            Jewelry Unique Styles
          </h2>

          <p className="text-sm lg:w-[70%] lg:text-base">
            There are many variations of passages of Lorem20 Thank you for
            taking the time to scroll through! We hope you enjoyed our content
            and wish you a wonderful day. 😊
          </p>

          <Button />
        </div>
      </div>
    </>
  );
}
