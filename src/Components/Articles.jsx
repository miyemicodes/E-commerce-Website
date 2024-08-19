import React from "react";
import articleImage1 from "../assets/article-image-1.jpg";
import articleImage2 from "../assets/article-image-2.jpg";
import articleImage3 from "../assets/article-image-3.jpg";
import { FaArrowRight } from "react-icons/fa6";

export default function Article() {
  return (
    <>
      <section className="px-16 py-28 bg-[#fffffc]">
        <h3 className="text-base pb-2 font-semibold text-center">Our Blogs</h3>
        <h2 className="font-semibold pb-3 text-xl font-serif text-center">
          Articles & Resources
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-center gap-6">
          <div className="flex flex-col gap-2 flex-1 text-sm ">
            <img
              src={articleImage1}
              alt="Lavish Pendant"
              className="object-cover object-center h-[277px] w-full rounded-md"
              loading="lazy"
            />
            <span className="text-sm md:text-base lg:text-lg">
              Lavish Perfection | January 10 2024
            </span>
            <p className="font-semibold md:text-base lg:text-lg">
              Behind the scenes crafting Lavish perfection
            </p>
            <a
              href="#"
              className="text-sm text-[#967f50] flex items-center justify-end gap-2 md:text-base lg:text-lg"
            >
              <p>Read More</p>
              <FaArrowRight />
            </a>
          </div>

          <div className="flex flex-col gap-2 flex-1 text-sm ">
            <img
              src={articleImage2}
              alt="Lavish Pendant"
              className=" object-cover object-bottom h-[277px] w-full rounded-md"
              loading="lazy"
            />

            <span className="text-sm md:text-base lg:text-lg">
              Lavish Perfection | January 10 2024
            </span>
            <p className="font-semibold md:text-base lg:text-lg">
              Behind the scenes crafting Lavish perfection
            </p>
            <a
              href="#"
              className="text-sm md:text-base lg:text-lg text-[#967f50] flex items-center justify-end gap-2"
            >
              <p>Read More</p>
              <FaArrowRight />
            </a>
          </div>

          <div className="flex flex-col gap-2 flex-1 text-sm">
            <img
              src={articleImage3}
              alt="Lavish Pendant"
              className="object-cover object-center h-[277px] w-full rounded-md"
              loading="lazy"
            />
            <span className="text-sm md:text-base lg:text-lg">
              Lavish Perfection | January 10 2024
            </span>
            <p className="font-semibold md:text-base lg:text-lg">
              Behind the scenes crafting Lavish perfection
            </p>
            <a
              href="#"
              className="text-sm md:text-base lg:text-lg text-[#967f50] flex items-center justify-end gap-2"
            >
              <p>Read More</p>
              <FaArrowRight />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
