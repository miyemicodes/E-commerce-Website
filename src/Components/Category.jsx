import React from "react";
import Search from "./Search";

import categoryImage from "../assets/categoryImage.jpg";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import ProductCard from "./CARD/ProductCard";

export default function ProductCategory() {
  return (
    <>
      <section className="py-10 px-2 flex flex-row gap-3 bg-transparent w-full">
        <div className="hidden  lg:flex flex-col  gap-5 w-[20%]">
          <div className="flex-col items-start justify-start border p-1 rounded-lg">
            <h2 className="text-xl px-2 py-1 font-serif font-semibold">
              Product By Category
            </h2>

            <ul className="text-sm flex flex-col gap-1">
              <li className="px-2 py-1 hover:bg-[#f5f5f2]">Men</li>
              <li className="px-2 py-1 hover:bg-[#f5f5f2]"> Women</li>
              <li className="px-2 py-1 hover:bg-[#f5f5f2]">Necklaces</li>
              <li className="px-2 py-1 hover:bg-[#f5f5f2]">Earrings </li>
              <li className="px-2 py-1 hover:bg-[#f5f5f2]">Bracelets </li>
              <li className="px-2 py-1 hover:bg-[#f5f5f2]">Rings </li>
            </ul>
          </div>

          <div className="flex-col items-start justify-start border p-1 rounded-lg">
            <h2 className="text-xl px-2 py-1 font-serif font-semibold">
              Brand By Category
            </h2>
            <ul className="text-sm flex flex-col gap-1">
              <li className="px-2 py-1 hover:bg-[#f5f5f2]">Versace</li>
              <li className="px-2 py-1 hover:bg-[#f5f5f2]"> Pandora</li>
              <li className="px-2 py-1 hover:bg-[#f5f5f2]">Tiffany & Co.</li>
              <li className="px-2 py-1 hover:bg-[#f5f5f2]">Boucheron </li>
            </ul>
          </div>

          <div className="flex-col items-start justify-start border p-1 rounded-lg">
            <h2 className="text-xl px-2 py-1 font-serif font-semibold">
              Price
            </h2>
            {/* <Slider/> */}
            <div className="flex items-center justify-between">
              <span className="bg-[#f5f5f2] px-3 py-1">$100</span>
              <span className="bg-[#f5f5f2] px-3 py-1">$700</span>
              <span className="bg-[#f5f5f2] px-3 py-1">Filter</span>
            </div>
          </div>

          <div className="py-3 px-1 rounded-lg">
            <img src={categoryImage} className="rounded-lg" />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6 w-full lg:w-[80%] py-4">
          <div className="flex items-center justify-between px-8">
            <Search />

            <div className="flex gap-2">
              <button>
                <FaCircleArrowLeft className="text-white bg-black rounded-full text-xl" />
              </button>

              <button>
                <FaCircleArrowRight className="text-white bg-black rounded-full text-xl" />
              </button>
            </div>
          </div>

          <div className="w-full grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 px-8">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
}
