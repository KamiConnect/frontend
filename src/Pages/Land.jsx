import React from "react";
import { Link } from "react-router-dom";

const Land=()=>{
    return(
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"20px", height:"100vh"}}>
            <div style={{fontSize:"40px"}}>KamiConnekt</div>
            <Link to="/register" style={{border:"none", backgroundColor:"#0474BA", padding:"10px 20px", textDecoration:"none", color:"#fff", fontWeight:"bold", borderRadius:"5px"}}>Continue</Link>
        </div>
    )
}

export default Land;