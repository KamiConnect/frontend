import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png"

const Land=()=>{
    return(
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"100vh"}}>
            <div>
                <img src={logo} alt="" />
            </div>
            <Link to="/register" style={{border:"none", backgroundColor:"#0474BA", padding:"10px 20px", textDecoration:"none", color:"#fff", fontWeight:"bold", borderRadius:"5px"}}>Continue</Link>
        </div>
    )
}

export default Land;