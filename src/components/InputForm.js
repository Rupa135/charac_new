import React , {useRef} from "react"
import {useNavigate} from "react-router-dom"
import "./InputForm.css"


const InputForm = (props) => {

    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const numberRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

    const enteredDetails = {}

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()

        enteredDetails.fname = firstNameRef.current.value
        enteredDetails.lname = lastNameRef.current.value
        enteredDetails.pNumber= numberRef.current.value
        enteredDetails.enteredEmail = emailRef.current.value
        enteredDetails.enteredPassword = passwordRef.current.value

        navigate("../details" , {replace : true})

        console.log(enteredDetails)
    }

   
    return(
        <form onSubmit={submitHandler}>
            <div className="page">
                <label htmlFor="firstName">First name</label>
                <input 
                type="text"
                id="firstName"
                ref={firstNameRef}
                placeholder="First name"/> 
            </div>

            <div className="page">
                <label htmlFor="lastName">Last name</label>
                <input 
                type="text"
                id="lastName"
                ref={lastNameRef}
                placeholder="Last name"/> 
            </div>

            <div className="page">
                <label htmlFor="contactNumber">Contact Number</label>
                <input 
                type="number"
                id="contactNumber"
                ref={numberRef}
                placeholder="Contact Number"/> 
            </div>

            <div className="page">
                <label htmlFor="email">Email Address (We'll never share your email with anyone else)</label>
                <input 
                type="email"
                id="email"
                ref={emailRef}
                placeholder="Email Address"/> 
            </div>

            <div className="page">
                <label htmlFor="password">Password</label>
                <input 
                type="password"
                id="password"
                ref={passwordRef}
                placeholder="Password"/> 
            </div>

            <div className="check">
                <input id="checkbox" type="checkbox"/>
                <label htmlFor="checkbox">By signing up , I agree to Charac terms of use and privacy policy</label>
            </div>

            <div className="nextButton">
                <button type="submit" className="buttonn">Next</button>
            </div>

        </form>
    )
    
}

export default InputForm;