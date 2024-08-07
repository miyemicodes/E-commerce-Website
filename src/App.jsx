// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import Home from "./Components/Home";
import ProductDetails from "./Components/ProductDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/productdetail" Component={ProductDetails} />
          <Route path="/about" Component={AboutUs} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
