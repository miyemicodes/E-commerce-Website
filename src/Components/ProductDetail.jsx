import React from "react";
import Property from "./Property";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Cover from "./CoverTop";
import Button from "./ShopNow";
import productImage from "../assets/productDetail.jpg";

export default function ProductDetails() {
  return (
    <>
      <section>
        <NavBar />
        <Cover />
        <div className="flex flex-col items-center justify-center px-8 py-16 md:flex-row  md:px-18">
          <div className="grid grid-cols-1 gap-3 flex-1">
            <img
              src={productImage}
              className=" w-[629px] h-[500px] object-cover object-top"
            />
            <div className="flex flex-row items-start gap-3 w-[629px] ">
              <img
                src={productImage}
                className="w-auto h-40 flex-1 object-cover object-top"
              />
              <img
                src={productImage}
                className="w-[auto] flex-1 h-40 object-cover object-bottom"
              />
              <img
                src={productImage}
                className="w-auto h-40 flex-1 object-cover object-center"
              />
            </div>
          </div>

          <div className="flex flex-col items-start justify-start gap-6 flex-1">
            <div className="flex flex-col items-start justify-start gap-4">
              <span className=" text-mono text-2xl font-semibold">
                Necklace
              </span>
              <h2 className="font-serif text-3xl font-semibold">
                Vintage Double Neckpiece
              </h2>
              <p className="text-sm font-normal">
                Celebrate life's precious moments with our Golden Birthday
                Vintage Neckpiece ,exquisite and delightful to eyes that behold
                it sparkles....
              </p>
            </div>

            <Button />

            <div className="flex flex-col items-start justify-start gap-2">
              <div className="flex items-center justify-start font-semibold">
                <span className="text-lg">Price :</span>
                <span className="font-bold text-xl"> $ 79.99</span>
              </div>
              <div>
                <span className="font-semibold text-lg"> Product Number :</span>
                <span> 5672-9013</span>
              </div>
              <div>
                <span className="font-semibold text-lg"> Category : </span>
                <span>Ring </span>
              </div>
              <div>
                <span className="font-semibold text-lg"> Tags : </span>
                <span>Bracelet, Assesories</span>
              </div>
            </div>
          </div>
        </div>
        <Property />
        <div></div>

        <Footer />
      </section>
    </>
  );
}
