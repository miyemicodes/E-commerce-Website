import React from "react";
import articleImage1 from "../assets/article-image-1.jpg";
import articleImage2 from "../assets/article-image-2.jpg";
import articleImage3 from "../assets/article-image-3.jpg";
import { FaArrowRight } from "react-icons/fa6";

export default function Article() {
  return (
    <>
      <section className="px-16 py-28 bg-[#fffffc]">
        <h3 className="text-sm pb-2 font-semibold text-center">Our Blogs</h3>
        <h2 className="font-semibold pb-3 text-lg font-serif text-center">
          Articles & Resources
        </h2>

        <div className="flex flex-row items-start justify-center gap-4">
          <div className="flex flex-col gap-2 flex-1 text-sm ">
            <img
              src={articleImage1}
              alt="Lavish Pendant"
              className="object-cover object-center h-[277px] w-full rounded-md"
              loading="lazy"
            />
            <span className="text-sm">Lavish Perfection | January 10 2024</span>
            <p className="font-semibold">
              Behind the scenes crafting Lavish perfection
            </p>
            <a
              href="#"
              className="text-sm text-[#967f50] flex items-center justify-end gap-2"
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

            <span className="text-sm">Lavish Perfection | January 10 2024</span>
            <p className="font-semibold">
              Behind the scenes crafting Lavish perfection
            </p>
            <a
              href="#"
              className="text-sm text-[#967f50] flex items-center justify-end gap-2"
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
            <span className="text-sm">Lavish Perfection | January 10 2024</span>
            <p className="font-semibold">
              Behind the scenes crafting Lavish perfection
            </p>
            <a
              href="#"
              className="text-sm text-[#967f50] flex items-center justify-end gap-2"
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
