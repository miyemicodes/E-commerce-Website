// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetail";
import Shop from "./Pages/Shop";
import User from "./Pages/Userprofile";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productdetail" element={<ProductDetails />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/User" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
