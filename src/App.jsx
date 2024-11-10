// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetail";
import Shop from "./Pages/Shop";
import User from "./Pages/Userprofile";
import NavBar from "./Components/NavBar";
import FaqPage from "./Pages/FaqPage";

function App() {
	useEffect(() => {
		AOS.init({
			duration: 1000, // Animation duration in milliseconds
			once: true, // Whether animation should happen only once - while scrolling down
		});
	}, []);

	return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productdetail/:id' element={<ProductDetails />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/faqPage' element={<FaqPage />} />
          <Route path='/User' element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
