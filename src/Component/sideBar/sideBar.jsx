import React from "react";
import "./sideBar.css";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <ul className="sidebar-main">
                    <li>
                        <Link to="/dashboard/category">Categories</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/product">Products</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/review">Reviews</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/aboutUs">About Us</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/event">Events</Link>
                    </li>
                </ul>
                <ul className="sidebar-end">
                    <li>
                        <Link to="#">Logout</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar;
