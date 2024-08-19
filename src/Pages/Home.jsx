import React from "react";
import Property from "../Components/Property";
import Unleash from "../Components/Unleash";
import Unique from "../Components/Uniquestyles";
import Article from "../Components/Articles";
import Instawall from "../Components/Instagramwall";
import Footer from "../Components/Footer";
import BannerPage from "../Components/Banner";
import SparkleItem from "../Components/SparkleShop";
import sparkleImage1 from "../assets/sparkle-1.jpg";
import sparkleImage2 from "../assets/sparkle-2.jpg";
import sparkleImage3 from "../assets/instapage-image-bracelet.jpg";
import sparkleImage4 from "../assets/sparkle4.jpg";
import sparkleImage5 from "../assets/sparklepage-image-2.jpg";

export default function Home() {
  const productImages = [
    sparkleImage1,
    sparkleImage2,
    sparkleImage3,
    sparkleImage4,
    sparkleImage5,
  ];

  return (
    <>
      <BannerPage />
      <Property />
      <SparkleItem images={productImages} />
      <Unleash />
      <Unique />
      <Article />
      <Instawall />
      <Footer />
    </>
  );
}
