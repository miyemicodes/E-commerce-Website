import React from "react";
import Cover from "../Components/CoverTop";
import Property from "../Components/Property";
import Instawall from "../Components/Instagramwall";
import Footer from "../Components/Footer";
import ProductCategory from "../Components/Category";
import Related from "../Components/RelatedProduct";

export default function Shop() {
  return <>
    <Cover />
    <Property />
    <ProductCategory />
    <Related/>
    <Instawall />
    <Footer/>
  </>;
}
