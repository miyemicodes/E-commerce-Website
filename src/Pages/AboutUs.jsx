import React from "react";
import Cover from "../Components/CoverTop";
import Property from "../Components/Property";
import Vision from "../Components/Vision";
import Video from "../Components/VideoFile";
import Instawall from "../Components/Instagramwall";
import Footer from "../Components/Footer";
import Testimonial from "../Components/Testimonial";
import FAQAccordion from "../Components/FAQAccordion";
import Team from "../Components/Team";

export default function AboutUs() {
  return (
    <>
      <Cover />
      <Property />
      <Vision />
      <Video />
      <Testimonial />
      <Team />
      <FAQAccordion />
      <Instawall />
      <Footer />
    </>
  );
}
