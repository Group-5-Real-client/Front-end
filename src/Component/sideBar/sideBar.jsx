import React from "react";
import "./sideBar.css";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
    const link = [{
        path:"/dashboard/category",
        name:"product",
        icon:""
    },{
        path:"/dashboard/Product",
        name:"product",
        icon:""
    },{
        path:"/dashboard/review",
        name:"product",
        icon:""
    },{
        path:"/dashboard/contact",
        name:"product",
        icon:""
    },{
        path:"/dashboard/aboutUs",
        name:"product",
        icon:""
    },{
        path:"/dashboard/admin",
        name:"product",
        icon:""
    }]

    let activeStyle = {
        backgroundColor:"#024034",
        borderRadius: "25px",
        
    }
    return (
        <>
            <div className="sidebar">
                
                    {link.map((e)=>{
                        return (
                            <ul className="sidebar-main">
                            <li>
                            <NavLink  style={({isActive})=>(isActive? activeStyle:undefined)} to={e.path} className="link-name">{e.name}</NavLink>
                            </li>
                            </ul>
                        )
                     })
                    }
                
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
