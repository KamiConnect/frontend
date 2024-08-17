import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import "../Styles/navbar.css"

const Navbar = () =>{
    return(
        <div className="navbar-container" style={{ background:"#fff",display:"flex", padding: "0 40px", justifyContent:"space-between", alignItems:"center"}}>
            <div style={{color:"#0474BA"}}>
                <p className="app-name" style={{fontWeight:"bold", fontSize:"25px"}}>KamiConnect</p>
            </div>
            <div className="" style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"20px"}}>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"10px", fontSize:"15px"}}><p>Online</p><Icon icon="ep:arrow-down-bold" color="0474BA"/></div>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"10px", fontSize:"15px"}}><p>Post-graduation</p><Icon icon="ep:arrow-down-bold" color="0474BA"/></div>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"10px", fontSize:"15px"}}><p>Undergraduate</p><Icon icon="ep:arrow-down-bold" color="0474BA"/></div>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"10px", fontSize:"15px"}}><p>Upskilling Certifications</p><Icon icon="ep:arrow-down-bold" color="0474BA"/></div>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"10px", fontSize:"15px"}}><p>Study abroad</p><Icon icon="ep:arrow-down-bold" color="0474BA"/></div>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"10px", fontSize:"15px"}}><p>Advanced diploma</p><Icon icon="ep:arrow-down-bold" color="0474BA"/></div>
                <div style={{backgroundColor:"#0474BA", width:"2px", height:"40px"}}></div>
            </div>
            <div>
                <button style={{background:"#0474BA", color:"#ffffff", padding:"10px 20px", border:"none", borderRadius:"5px", fontSize:"15px", fontWeight:"semibold"}}>Sign up</button>
            </div>
        </div>
    )
}

export default Navbar