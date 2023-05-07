import "./index.css";
import Footer from "./Component/Footer/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Component/navbar/navbar";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/index";
import Event from "./Pages/Event/index";
import Category from "./Pages/Category/Category";
import Products from "./Pages/Products/Product";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/Signup";
import ProductPage from "./Pages/Singleproduct/index";
import FoodPage from "./Pages/FoodPage";
import Recycling from "./Pages/Recycling";
import Hygienic from "./Pages/Hygienic";

const NotFound = () => <div>Page not found</div>;

function App() {
    const isLoggedIn = false;
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                {!isLoggedIn ? (
                    <>
                        <Route path="Login" element={<Login />} />
                        <Route path="Register" element={<Signup />} />
                    </>
                ) : (
                    <>
                        <Route path="Contact" element={<ContactUs />} />

                        <Route path="OneProduct" element={<ProductPage />} />
                        <Route path="" element={<Home />} />
                        <Route path="FoodProduct" element={<FoodPage />} />
                        <Route path="Recycling" element={<Recycling />} />
                        <Route path="Hygienic" element={<Hygienic />} />
                    </>
                )}
                <Route path="Our-story" element={<AboutUs />} />
                <Route path="Event" element={<Event />} />
                <Route path="Category" element={<Category />} />
                <Route path="Product" element={<Products />} />
                <Route path="*" exact={true} element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
