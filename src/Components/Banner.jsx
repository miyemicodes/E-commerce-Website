import React from "react";
import Button from "./ShopNow";
import homeImage1 from "../assets/Homepage-1.jpg";
import homeImage2 from "../assets/Homepage-2.jpg";
import qualityImage from "../assets/bannerBrandPic.png";
import textImage from "../assets/instapage-image-neckpiece.jpg";

export default function BannerPage() {
  return (
    <>
      <div className="bg-[#fbf3e2] w-[100%] flex flex-col items-center justify-center gap-4 px-4 py-12 md:flex-row lg:px-8 ">
        <div className="flex flex-col items-center justify-center gap-4 flex-1  md:items-start md:justify-start">
          <h2 className="text-center text-4xl font-serif md:text-5xl md:text-start lg:text-7xl 2xl:text-8xl">
            Experience the Brilliance of
            <img
              src={textImage}
              className="w-12 h-8 object-cover inline rounded-full gap-2"
            />
            Craftsmanship
          </h2>

          <p className="text-center text-xl text-[#888783] md:text-start">
            Discover a World where beaury meets Craftsmanship,and every piece of
            jewellry tells a story .
          </p>

          <div className="w-[90%] flex flex-row items-center justify-center gap-9 md:justify-start lg:justify-between">
            <Button />

            <img
              src={qualityImage}
              className="md:w-20 h-20 lg:w-30 lg:h-30 object-cover"
            />
          </div>
        </div>

        <div className="flex flex-row items-center justify-center flex-1 gap-4 rounded-full w-[100%]">
          <img
            src={homeImage1}
            className=" md:w-[50%] h-96  lg:h-full object-cover rounded-t-full"
          />

          <img
            src={homeImage2}
            className="hidden md:block md:w-[50%] h-96  lg:h-full object-cover rounded-b-full"
          />
        </div>
      </div>
    </>
  );
}
