import React from "react";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
 
const Homepage=()=>{
    return(
        <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
            <Navbar />
            <Home />
        </div>
    )
}

export default Homepage;