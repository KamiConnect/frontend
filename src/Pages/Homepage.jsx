import React from "react";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import ChatBot from "../Components/ChatBot";
 
const Homepage=()=>{
    return(
        <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
            <Navbar />
            <Home />
        </div>
    )
}

export default Homepage;