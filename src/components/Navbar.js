import React from "react"
import {GiHumanTarget} from "react-icons/gi"
import "./Navbar.css"

const NavBar = () => {

    return(
        <div className="navigation">
            <GiHumanTarget className="icon" size="30px"/>
            <h1 className="heading">Charac</h1>
            <a href="">charac.co.uk</a>
        </div>
    )


}

export default NavBar;