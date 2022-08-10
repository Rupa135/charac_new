import React from "react";
import "./LoginButton.css"

const LoginButton = () => {
    return(
        <div>
            <h2><span>or</span></h2>
            <div>
                <button type="button" className="loginButton">Continue with NHS login</button>
            </div>
        </div>
    )
}

export default LoginButton;