import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import Signup from "../Signup/Signup";
function Navbar(){
    return(
        <>
        <div className="navbar">

        <Link to="/" className="Navbar_a">Home</Link>
        <Link to="/signup" className="Navbar_a">Signup</Link>
        <Link to="/login" className="Navbar_a">Login</Link>
        <Link to="/user" className="Navbar_a">User</Link>
            
        </div>

        </>
    )
}
export default Navbar;