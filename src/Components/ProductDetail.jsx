import React from "react";
import Property from "./Property";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Cover from "./CoverTop";

export default function ProductDetails() {
  return <>
    <section>
      <NavBar />
      <Cover/>
      <div></div>
      <Property/>
      <div></div>

      <Footer/>
    </section>
  </>;
}
