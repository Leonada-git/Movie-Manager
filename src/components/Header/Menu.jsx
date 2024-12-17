import React from "react";
import { NavLink }  from "react-router";

const Menu=()=>{
    return(<nav>
        <ul>
            <li><NavLink to="/" >Home</NavLink></li>
            <li><NavLink to="/favories">Favories</NavLink></li>
            <li><a href="#Service">Service</a></li>
        </ul>
    </nav>)
}
export default Menu;