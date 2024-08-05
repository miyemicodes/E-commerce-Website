import React from "react";
import NavBar from "./NavBar";
import Cover from "./CoverTop";
import Property from "./Property";
import Vision from "./Vision";
import Video from "./VideoFile";
import Instawall from "./Instagramwall";
import Footer from "./Footer";
import Testimonial from "./Testimonial";

export default function AboutUs() {
  return (
    <>
      <NavBar />
      <Cover />
      <Property />
      <Vision />
      <Video />
      <Testimonial />
      <Instawall />
      <Footer />
    </>
  );
}
