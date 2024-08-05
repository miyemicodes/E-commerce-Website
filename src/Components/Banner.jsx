import React from "react";
import Button from "./ShopNow";
import homeImage1 from "../assets/Homepage-1.jpg";
import homeImage2 from "../assets/Homepage-2.jpg";
import textImage from "../assets/instapage-image-neckpiece.jpg";

export default function BannerPage() {
  return (
    <>
      <section className="bg-[#fbf3e2] flex flex-col items-center justify-center gap-12 px-24 py-12 md:flex-row">
        <div className="flex flex-col items-center justify-center md:items-start md:justify-start gap-4 flex-1 ">
          <h2 className="text-center text-3xl font-serif md:text-7xl md:text-start">
            Experience the Brilliance of
            <img
              src={textImage}
              className="w-12 h-8 object-cover inline rounded-full gap-2"
            />
            Craftsmanship
          </h2>
          <p className="text-center text-[#888783] md:text-start">
            Discover a World where beaury meets Craftsmanship,and every piece of
            jewellry tells a story .
          </p>
          <div>
            <Button />
          </div>
        </div>

        <div className="flex flex-row items-center justify-center flex-1 gap-8 rounded-full">
          <img
            src={homeImage1}
            className="md:w-96 h-96 object-cover rounded-t-full"
          />

          <img
            src={homeImage2}
            className="md:w-96 h-96 object-cover rounded-b-full"
          />
        </div>
      </section>
    </>
  );
}
