import react from "react";
import Footer from "./Components/Footer";
import Article from "./Components/Articles";
import Instawall from "./Components/Instagramwall";
import Unique from "./Components/Uniquestyles";
import Unleash from "./Components/Unleash";
import Property from "./Components/Property";

import Cover from "./Components/CoverTop";

function App() {
  return (
    <>
      <Cover />
      <Property />
      <Unleash />
      <Unique />
      <Article />
      <Instawall />
      <Footer />
    </>
  );
}

export default App;
