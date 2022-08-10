import React , {Fragment} from "react"
import "./App.css"
import Connecting from "./components/Connecting";
import Details from "./components/Details";
import { Routes , Route } from "react-router-dom";
import NavBar from "./components/Navbar";

const App = () => {

  return(
      <Fragment>
      <Routes>
        <Route path="/" element={<Connecting/>}/>
        <Route path="/details" element={<Details/>}/>
      </Routes>
      </Fragment>
    
  )
}

export default App;
