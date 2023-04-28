import "./index.css";
import Footer from "./Component/Footer/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Component/navbar/navbar";
import AboutUs from "./Pages/AboutUs/index";
import ContactUs from "./Pages/ContactUs/index";
import Event from "./Pages/Event/index";
import Category from "./Pages/Category/Category";
import Product from "./Pages/Product/Product";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="About" element={<AboutUs />} />
        <Route path="Event" element={<Event />} />
        <Route path="Contact" element={<ContactUs />} />
        <Route path="Category" element={<Category />} />
        <Route path="Product" element={<Product />} />
        <Route path="Login" element={<Login />} />
        <Route path="" element={<Home />} />
        <Route path="Register" element={<Signup />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
