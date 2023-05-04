import React from "react";
import "./sideBar.css";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
    const link = [
        {
            path: "/dashboard/categories",
            name: "Categories",
            icon: "",
        },
        {
            path: "/dashboard/Product",
            name: "Products",
            icon: "",
        },
        {
            path: "/dashboard/Reviews",
            name: "Reviews",
            icon: "",
        },
        {
            path: "/dashboard/ContactUs",
            name: "Contact",
            icon: "",
        },
        {
            path: "/dashboard/AboutUs",
            name: "About Us",
            icon: "",
        },
        {
            path: "/dashboard/Admin",
            name: "Admins",
            icon: "",
        },
    ];

    let activeStyle = {
        backgroundColor: "#b6bfa3",
        borderRadius: "25px",
        transition: "all 0.3s ease-in",
        width: "200px",
    };
    return (
        <>
            <div className="sidebar">
                <div className="sidebar-main">
                    {link.map((e) => {
                        return (
                            <ul>
                                <li>
                                    <NavLink
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }
                                        to={e.path}
                                        className="link-name"
                                    >
                                        {e.name}
                                    </NavLink>
                                </li>
                            </ul>
                        );
                    })}
                </div>

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
