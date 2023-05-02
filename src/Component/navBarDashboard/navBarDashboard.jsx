import React from "react";
import Sidebar from "../../Component/sideBar/sideBar.jsx";
import "./navBarDashboard.css";
import ProductTable from "../productTableDash/productTableDash.jsx";

function NavBar({ dashboardName, adminName, adminAvatar }) {
    return (
        <>
            <div className="navbar">
                <div className="navbar-start">
                    <h1>{dashboardName}Dashboard</h1>
                </div>
                <div className="navbar-end">
                    <div className="admin-details">
                        <img src={adminAvatar} alt="Admin Avatar" />
                        <span>{adminName}</span>
                    </div>
                </div>
            </div>
            <div className="trying-table">
                <Sidebar />
                <ProductTable />
            </div>
        </>
    );
}

export default NavBar;
