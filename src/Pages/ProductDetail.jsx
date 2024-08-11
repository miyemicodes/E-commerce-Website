import React from "react";
import Property from "../Components/Property";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import Cover from "../Components/CoverTop";
import Button from "../Components/ShopNow";
import productImage from "../assets/productDetail.jpg";
import Testimonial from "../Components/Testimonial";
import Related from "../Components/RelatedProduct";

export default function ProductDetails() {
  return (
    <>
      <section>
        <NavBar />
        <Cover />

        <div className="py-10 px-24 flex flex-col items-center justify-center gap-8 md:flex-row  md:px-18">
          <div className="grid grid-cols-1 gap-3 flex-1">
            <img
              src={productImage}
              className=" w-full h-[500px] object-cover object-top"
            />
            <div className="flex flex-row items-start gap-3 w-[600px] ">
              <img
                src={productImage}
                className="w-[100px] h-40 flex-1 object-cover object-top"
              />
              <img
                src={productImage}
                className="w-[100px] flex-1 h-40 object-cover object-bottom"
              />
              <img
                src={productImage}
                className="w-[100px] h-40 flex-1 object-cover object-center"
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

        <div className="py-6 px-24 text-left">
          <div className="flex items-start justify-start gap-3 py-6">
            <button className="border font-semibold px-2 py-1 rounded-md hover:text-white hover:bg-[#967f50]">
              Description
            </button>
            <button className="border font-semibold px-2 py-1 rounded-md hover:text-white hover:bg-[#967f50]">
              Additional Information
            </button>
          </div>

          <div>
            <h1 className="font-serif text-3xl pb-4">Product Description</h1>
            <p className="text-sm text-[#8a8b85]">
              This is the most used props for routing. It helps in specifying
              the target location to which the link should navigate. It can be a
              string representing the path name or an object with path name.
              When you click on Dashboard you will be redirected to that
              component. This is the most used props for routing. It helps in
              specifying the target location to which the link should navigate.
              It can be a string representing the path name or an object with
              path name. When you click on Dashboard you will be redirected to
              that component.
            </p>
          </div>
        </div>

        <Testimonial />

        <Related />
        <Footer />
      </section>
    </>
  );
}
