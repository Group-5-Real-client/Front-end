import "./index.css";
import Footer from "./Component/Footer/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Component/navbar/navbar";
import AboutUs from "./Pages/AboutUs/index";
import ContactUs from "./Pages/ContactUs/index";
import Event from "./Pages/Event/index";
import Category from "./Pages/Category/Category";
import Products from "./Pages/Products/Product";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/Signup";
import  ProductPage from './Pages/Singleproduct/index'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="About" element={<AboutUs />} />
        <Route path="Event" element={<Event />} />
        <Route path="Contact" element={<ContactUs />} />
        <Route path="Category" element={<Category />} />
        <Route path="Product" element={<Products />} />
        <Route path="/OneProduct/:productId" element={<ProductPage />} />
        <Route path="Login" element={<Login />} />
        <Route path="" element={<Home />} />
        <Route path="Register" element={<Signup />} />
        <Route path=":category?" element={<Products />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
