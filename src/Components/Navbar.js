import React from "react";
import "./Navbar.css";
import icon from "../app-icon.png"


function Navbar(){
    return(
    <header className="header">
            
            <img src={icon}  className="navIcon"></img>
            

    </header> 
    )
}

export default Navbar;