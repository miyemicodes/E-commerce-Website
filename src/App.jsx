import react from "react";
import Footer from "./Components/Footer";
import Article from "./Components/Articles";
import Instawall from "./Components/Instagramwall";
import Unique from "./Components/Uniquestyles";
import Unleash from "./Components/Unleash";
import Property from "./Components/Property";
import NavBar from "./Components/NavBar";
import Cover from "./Components/CoverTop";
import Vision from "./Components/Vision";
import ProductDetails from "./Components/ProductDetail";
import SparkleItem from "./Components/SparkleShop";

function App() {
  return (
    <>
      <Cover />
      <NavBar />
      <Vision />
      <Property />
      <SparkleItem />
      <Unleash />
      <Unique />
      <Article />
      <Instawall />
      <Footer />

      <ProductDetails />
    </>
  );
}

export default App;
