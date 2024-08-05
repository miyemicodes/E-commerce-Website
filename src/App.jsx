// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import Home from "./Components/Home";
import ProductDetails from "./Components/ProductDetail";

function App() {
  return (
    <>
      <Home />
      <ProductDetails />
      <AboutUs/>

      {/* <Router>
        <Routes>
          <Route exact path="/" Component={<Home />} />
          <Route path="/productDetails" Component={<ProductDetails />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
