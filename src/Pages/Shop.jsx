import React from "react";
import Cover from "../Components/CoverTop";
import Property from "../Components/Property";
import Instawall from "../Components/Instagramwall";
import Footer from "../Components/Footer";
import ProductCategory from "../Components/Category";

export default function Shop() {
  return <>
    <Cover />
    <Property />
    <ProductCategory/>
    <Instawall />
    <Footer/>
  </>;
}
