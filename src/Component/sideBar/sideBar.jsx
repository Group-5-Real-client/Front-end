import React from "react";
import "./sideBar.css";
import { Link, NavLink } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { RiAdminFill } from "react-icons/ri";
import { FaProductHunt } from "react-icons/fa";
import { MdRateReview, MdOutlineLogout, MdDescription } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";

function Sidebar() {
    const link = [
        {
            path: "/dashboard/categories",
            name: "Categories",
            icon: <BiCategory />,
        },
        {
            path: "/dashboard/Product",
            name: "Products",
            icon: <FaProductHunt />,
        },
        {
            path: "/dashboard/Reviews",
            name: "Reviews",
            icon: <MdRateReview />,
        },
        {
            path: "/dashboard/ContactUs",
            name: "Contact",
            icon: <AiOutlineMessage />,
        },
        {
            path: "/dashboard/AboutUs",
            name: "About Us",
            icon: <MdDescription />,
        },
        {
            path: "/dashboard/Admin",
            name: "Admins",
            icon: <RiAdminFill />,
        },
    ];

    let activeStyle = {
        backgroundColor: "#bf681b",
        color: "#fff",
        borderRadius: "5px",
        transition: "all 0.3s ease-in",
        width: "200px",
        boxShadow: "0px 1px 5px #bf681b",
        fontWeight: "bold",
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
                                        {e.icon}
                                        {e.name}
                                    </NavLink>
                                </li>
                            </ul>
                        );
                    })}
                </div>

                <ul className="sidebar-end">
                    <li>
                        <Link to="#">
                            <MdOutlineLogout />
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar;
