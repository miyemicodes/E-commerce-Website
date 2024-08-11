import React from "react";
import { FaArrowRight, FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import sparkleImage1 from "../assets/sparkle-1.jpg";
import sparkleImage2 from "../assets/sparkle-2.jpg";
import sparkleImage3 from "../assets/instapage-image-bracelet.jpg";
import sparkleImage4 from "../assets/sparkle4.jpg";
import sparkleImage5 from "../assets/sparklepage-image-2.jpg";


export default function SparkleItem() {
  return (
    <>
      <section className="hidden  px-16 py-8 bg-[#fffffc]overflow-hidden  md:block">
        <h1 className="text-2xl font-semibold font-serif text-center pb-3">
          Sparkle in Love
        </h1>

        <div className="flex flex-row items-center justify-center gap-3 relative">
          
          <div>
            <div className="w-[200px]">
              <img src={sparkleImage1} className="w-full object-cover" />
            </div>

            <div className="flex flex-row items-center justify-between">
              <p className="font-semibold">Necklaces</p>
              <button className="border-none font-light text-sm flex flex-row items-center justify-center gap-2">
                <p>Explore</p>
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div>
            <div className="w-[200px] ">
              <img src={sparkleImage2} className="w-full object-cover" />
            </div>

            <div className="flex flex-row items-center justify-between">
              <p className="font-semibold">Earrings</p>
              <button className="border-none font-light text-sm flex flex-row items-center justify-center gap-2">
                <p>Explore</p>
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div>
            <div className="w-[200px]">
              <img src={sparkleImage3} className="w-full object-cover" />
            </div>

            <div className="flex flex-row items-center justify-between">
              <p className="font-semibold">Bracelet</p>
              <button className="border-none font-light text-sm flex flex-row items-center justify-center gap-2">
                <p>Explore</p>
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div>
            <div className="w-[200px] ">
              <img src={sparkleImage4} className="w-full object-cover" />
            </div>

            <div className="flex flex-row items-center justify-between">
              <p className="font-semibold">Ring</p>
              <button className="border-none font-light text-sm flex flex-row items-center justify-center gap-2">
                <p>Explore</p>
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div>
            <div className="w-[200px]">
              <img src={sparkleImage5} className="w-full object-cover" />
            </div>

            <div className="flex flex-row items-center justify-between">
              <p className="font-semibold">Pendant</p>
              <button className="border-none font-light text-sm flex flex-row items-center justify-center gap-2">
                <p>Explore</p>
                <FaArrowRight />
              </button>
            </div>
          </div>

          <button className="text-xl absolute right-[5px]">
            <FaCaretRight />
          </button>
          <button className="text-xl absolute left-0">
            <FaCaretLeft />
          </button>
        </div>
      </section>
    </>
  );
}
