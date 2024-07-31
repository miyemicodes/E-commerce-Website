import React from "react";
import Button from "./ShopNow";
import featuredImage1 from "../assets/featured-image-main-1.jpg";

export default function Unleash() {
  return (
    <>
      <section className="px-16 py-4 flex flex-row gap-5">
        <div className="bg-[#f5f5f2] flex flex-col flex-1 px-6 py-10 gap-5 rounded-md">
          <span className="bg-white text-black text-sm p-1  rounded-lg w-fit">
            Get 25% off this week
          </span>
          <p className="font-semibold text-3xl ">
            Unleash Your Cravings,Not Your Wallet !
          </p>
          <Button/>
        </div>
        <div className="flex-1 rounded-md">
          <img src={featuredImage1} className="rounded-md" />
        </div>
      </section>
    </>
  );
}
