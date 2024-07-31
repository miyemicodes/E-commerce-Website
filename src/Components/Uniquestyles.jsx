import React from "react";
import featuredImage from "../assets/featured-image-main-2.jpg";
import Button from "./ShopNow";

export default function Unique() {
  return (
    <>
      <section className="bg-[#fbf3e2] flex items-center justify-center gap-6 px-24 py-4 ">
        <div className="flex-1 rounded-lg">
          <img
            src={featuredImage}
            className="h-[500px] w-[auto] object-contain rounded-lg"
          />
        </div>

        <div className="flex-1 flex flex-col gap-3">
          <h2 className="text-3xl font-normal font-serif">
            Jewelry Unique Styles
          </h2>

          <p className="text-sm lg:w-[70%]">
            There are many variations of passages of Lorem20 Thank you for
            taking the time to scroll through! We hope you enjoyed our content
            and wish you a wonderful day. 😊
          </p>

          <Button />
        </div>
      </section>
    </>
  );
}
