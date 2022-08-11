import React , {useState} from "react"
import {useNavigate} from "react-router-dom"
import "./InputForm.css"


const InputForm = () => {

    const[firstName , setFirstName] = useState()
    const[lastName , setLastName] = useState()
    const[number , setNumber] = useState()
    const[email , setEmail] = useState()
    const[password , setPassword] = useState()


    const enteredDetails = {}
    const navigate = useNavigate()

    function debounce(callback, timeout = 500) {
        let timer
      
        // inner function
        return function (...args) {
          clearTimeout(timer)
          timer = setTimeout(() => callback.apply(this, args), timeout)
        }
      }
      

    const submitHandler = (e) => {
        e.preventDefault()

        enteredDetails.fname = firstName
        enteredDetails.lname = lastName
        enteredDetails.pNumber= number
        enteredDetails.enteredEmail = email
        enteredDetails.enteredPassword = password

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
                value={firstName}
                onChange={debounce((e) => (setFirstName(e.target.value)))}
                placeholder="First name"/> 
            </div>

            <div className="page">
                <label htmlFor="lastName">Last name</label>
                <input 
                type="text"
                id="lastName"
                value={lastName}
                onChange={debounce((e) => (setLastName(e.target.value)))}
                placeholder="Last name"/> 
            </div>

            <div className="page">
                <label htmlFor="contactNumber">Contact Number</label>
                <input 
                type="number"
                id="contactNumber"
                value={number}
                onChange={debounce((e) => (setNumber(e.target.value)))}
                placeholder="Contact Number"/> 
            </div>

            <div className="page">
                <label htmlFor="email">Email Address (We'll never share your email with anyone else)</label>
                <input 
                type="email"
                id="email"
                value={email}
                onChange={debounce((e) => (setEmail(e.target.value)))}
                placeholder="Email Address"/> 
            </div>

            <div className="page">
                <label htmlFor="password">Password</label>
                <input 
                type="password"
                id="password"
                value={password}
                onChange={debounce((e) => (setPassword(e.target.value)))}
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