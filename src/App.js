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
import Dashboard from "./Pages/Dashboard/dashboard.js";
import ProductTable from "./Component/productTableDash/productTableDash";
import CategoryTable from "./Component/categogryTableDash/categoryTableDash";
import ReviewTable from "./Component/reviewTableDash/reviewTableDash";
import ContactTable from "./Component/contactTableDash/contactTableDash";
import AboutTable from "./Component/aboutTableDash/aboutTableDash";
import AdminTable from "./Component/adminTableDash/adminTableDash";

function App() {
    return (
        <BrowserRouter>
            {/* <Header /> */}
            <Routes>
                <Route path="About" element={<AboutUs />} />
                <Route path="Event" element={<Event />} />
                <Route path="Contact" element={<ContactUs />} />
                <Route path="Category" element={<Category />} />
                <Route path="Product" element={<Product />} />
                <Route path="Login" element={<Login />} />
                <Route path="Home" element={<Home />} />
                <Route path="Register" element={<Signup />} />
            </Routes>
            {/* <Footer /> */}
            <Routes>
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route
                        path="/dashboard/Product"
                        element={<ProductTable />}
                    />
                    <Route
                        path="/dashboard/Categories"
                        element={<CategoryTable />}
                    />
                    <Route
                        path="/dashboard/Reviews"
                        element={<ReviewTable />}
                    />
                    <Route
                        path="/dashboard/ContactUs"
                        element={<ContactTable />}
                    />
                    <Route path="/dashboard/AboutUs" element={<AboutTable />} />
                    <Route path="/dashboard/Admin" element={<AdminTable />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
