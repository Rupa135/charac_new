import React from "react"
import "./Connecting.css"
import InputForm from "./InputForm"
import LoginButton from "./LoginButton"
import NavBar from "./Navbar"

const Connecting = () => {

    return(
        <div>
            <NavBar/>
        <div className="background">
        <div className="Card">
          <h1>Register with Charac</h1>
          <p>Already have an account? Log in to Charac</p>
          <InputForm/>
          <LoginButton/>
        </div>
        </div>
        </div>
    )
}

export default Connecting;