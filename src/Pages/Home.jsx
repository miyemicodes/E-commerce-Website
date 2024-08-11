import React from "react";
import NavBar from "../Components/NavBar";
import Property from "../Components/Property";
import Unleash from "../Components/Unleash";
import Unique from "../Components/Uniquestyles";
import Article from "../Components/Articles";
import Instawall from "../Components/Instagramwall";
import Footer from "../Components/Footer";
import BannerPage from "../Components/Banner";
import SparkleItem from "../Components/SparkleShop";

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
