import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () =>{
    return (
        <div className="navOptions">
            <li className="navbar_item active">
                <Link className="navbar_link" to ="/locations">Locations</Link>
            </li>

            <li className="navbar_item active">
                <Link className="navbar_link" to ="/employees">Employees</Link>
            </li>

            <li className="navbar_item active">
                <Link className="navbar_link" to ="/customers">Customers</Link>
            </li>

            <li className="navbar_item active">
                <Link className="navbar_link" to ="/products">Products</Link>
            </li>

            <li className="navbar_item active">
                <Link className="navbar_link" to ="#"
                onClick={
                    () => {
                        localStorage.removeItem("kandy_customer")
                    }
                }>Log Out</Link>
            </li>
        </div>
    )
}