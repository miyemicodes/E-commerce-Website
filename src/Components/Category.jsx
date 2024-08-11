import React from "react";
import Search from "./Search";
import instaImage2 from "../assets/instapage-image-neckpiece.jpg";
import instaImage1 from "../assets/instapage-image-bracelet.jpg";
import instaImage3 from "../assets/instapage-image-diamond.jpg";
import instaImage4 from "../assets/instapage-image-ring.jpg";
import {
  FaCartShopping,
  FaCircleArrowLeft,
  FaCircleArrowRight,
} from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa";

export default function ProductCategory() {
  return (
    <>
      <section className="py-10 px-6 flex flex-row gap-3 bg-transparent">
        <div className="hidden lg:flex flex-col w-[20%]">
          <div className="flex-col items-start justify-start">
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

          <div className="flex-col items-start justify-start">
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

          <div className="flex-col items-start justify-start">
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
        </div>

        <div className="flex flex-col gap-2 w-[80%] py-4">
          <div className="flex items-center justify-between">
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

          <div className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="flex flex-col items-center justify-start gap-2 border  rounded-md w-[300px] px-1">
              <div className="h-[250px] w-[300px]">
                <img
                  src={instaImage2}
                  className="rounded-md h-[250px] w-[300px] object-cover"
                />
              </div>

              <div className="flex flex-col gap-2 w-[300px] px-2">
                <div className="flex flex-row items-center justify-between">
                  <p className="font-semibold font-sans"> Necklaces</p>

                  <div className="flex items-center justify-center gap-2">
                    <span>4.5</span>
                    <FaStarHalf className="text-blue-500" />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-lg">$95.00</p>
                  <FaCartShopping className="bg-transparent text-black text-lg " />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start gap-2 border  rounded-md w-[300px] px-1">
              <div className="h-[250px] w-[300px]">
                <img
                  src={instaImage2}
                  className="rounded-md h-[250px] w-[300px] object-cover"
                />
              </div>

              <div className="flex flex-col gap-2 w-[300px] px-2">
                <div className="flex flex-row items-center justify-between">
                  <p className="font-semibold font-sans"> Necklaces</p>

                  <div className="flex items-center justify-center gap-2">
                    <span>4.5</span>
                    <FaStarHalf className="text-blue-500" />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-lg">$95.00</p>
                  <FaCartShopping className="bg-transparent text-black text-lg " />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start gap-2 border  rounded-md w-[300px] px-1">
              <div className="h-[250px] w-[300px]">
                <img
                  src={instaImage2}
                  className="rounded-md h-[250px] w-[300px] object-cover"
                />
              </div>

              <div className="flex flex-col gap-2 w-[300px] px-2">
                <div className="flex flex-row items-center justify-between">
                  <p className="font-semibold font-sans"> Necklaces</p>

                  <div className="flex items-center justify-center gap-2">
                    <span>4.5</span>
                    <FaStarHalf className="text-blue-500" />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-lg">$95.00</p>
                  <FaCartShopping className="bg-transparent text-black text-lg " />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start gap-2 border  rounded-md w-[300px] px-1">
              <div className="h-[250px] w-[300px]">
                <img
                  src={instaImage2}
                  className="rounded-md h-[250px] w-[300px] object-cover"
                />
              </div>

              <div className="flex flex-col gap-2 w-[300px] px-2">
                <div className="flex flex-row items-center justify-between">
                  <p className="font-semibold font-sans"> Necklaces</p>

                  <div className="flex items-center justify-center gap-2">
                    <span>4.5</span>
                    <FaStarHalf className="text-blue-500" />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-lg">$95.00</p>
                  <FaCartShopping className="bg-transparent text-black text-lg " />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start gap-2 border  rounded-md w-[300px] px-1">
              <div className="h-[250px] w-[300px]">
                <img
                  src={instaImage2}
                  className="rounded-md h-[250px] w-[300px] object-cover"
                />
              </div>

              <div className="flex flex-col gap-2 w-[300px] px-2">
                <div className="flex flex-row items-center justify-between">
                  <p className="font-semibold font-sans"> Necklaces</p>

                  <div className="flex items-center justify-center gap-2">
                    <span>4.5</span>
                    <FaStarHalf className="text-blue-500" />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-lg">$95.00</p>
                  <FaCartShopping className="bg-transparent text-black text-lg " />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start gap-2 border  rounded-md w-[300px] px-1">
              <div className="h-[250px] w-[300px]">
                <img
                  src={instaImage2}
                  className="rounded-md h-[250px] w-[300px] object-cover"
                />
              </div>

              <div className="flex flex-col gap-2 w-[300px] px-2">
                <div className="flex flex-row items-center justify-between">
                  <p className="font-semibold font-sans"> Necklaces</p>

                  <div className="flex items-center justify-center gap-2">
                    <span>4.5</span>
                    <FaStarHalf className="text-blue-500" />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-lg">$95.00</p>
                  <FaCartShopping className="bg-transparent text-black text-lg " />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start gap-2 border  rounded-md w-[300px] px-1">
              <div className="h-[250px] w-[300px]">
                <img
                  src={instaImage2}
                  className="rounded-md h-[250px] w-[300px] object-cover"
                />
              </div>

              <div className="flex flex-col gap-2 w-[300px] px-2">
                <div className="flex flex-row items-center justify-between">
                  <p className="font-semibold font-sans"> Necklaces</p>

                  <div className="flex items-center justify-center gap-2">
                    <span>4.5</span>
                    <FaStarHalf className="text-blue-500" />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-lg">$95.00</p>
                  <FaCartShopping className="bg-transparent text-black text-lg " />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start gap-2 border  rounded-md w-[300px] px-1">
              <div className="h-[250px] w-[300px]">
                <img
                  src={instaImage2}
                  className="rounded-md h-[250px] w-[300px] object-cover"
                />
              </div>

              <div className="flex flex-col gap-2 w-[300px] px-2">
                <div className="flex flex-row items-center justify-between">
                  <p className="font-semibold font-sans"> Necklaces</p>

                  <div className="flex items-center justify-center gap-2">
                    <span>4.5</span>
                    <FaStarHalf className="text-blue-500" />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-lg">$95.00</p>
                  <FaCartShopping className="bg-transparent text-black text-lg " />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start gap-2 border  rounded-md w-[300px] px-1">
              <div className="h-[250px] w-[300px]">
                <img
                  src={instaImage2}
                  className="rounded-md h-[250px] w-[300px] object-cover"
                />
              </div>

              <div className="flex flex-col gap-2 w-[300px] px-2">
                <div className="flex flex-row items-center justify-between">
                  <p className="font-semibold font-sans"> Necklaces</p>

                  <div className="flex items-center justify-center gap-2">
                    <span>4.5</span>
                    <FaStarHalf className="text-blue-500" />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-lg">$95.00</p>
                  <FaCartShopping className="bg-transparent text-black text-lg " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
