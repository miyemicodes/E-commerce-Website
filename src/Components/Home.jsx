import React from "react";
import NavBar from "./NavBar";
import Property from "./Property";
import Unleash from "./Unleash";
import Unique from "./Uniquestyles";
import Article from "./Articles";
import Instawall from "./Instagramwall";
import Footer from "./Footer";
import BannerPage from "./Banner";
import SparkleItem from "./SparkleShop";

export default function Home() {
  return (
    <>
      <NavBar />
      <BannerPage />
      <Property />
      <SparkleItem />
      <Unleash />
      <Unique />
      <Article />
      <Instawall />
      <Footer />
    </>
  );
}
