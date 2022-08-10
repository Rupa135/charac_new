import React from "react"
import "./App.css"
import Connecting from "./components/Connecting";
import Details from "./components/Details";
import { Routes , Route } from "react-router-dom";
import NavBar from "./components/Navbar";

const App = () => {

  return(
      <React.Fragment>
      <Routes>
        <Route path="/" element={<Connecting/>}/>
        <Route path="/details" element={<Details/>}/>
      </Routes>
      </React.Fragment>
    
  )
}

export default App;
