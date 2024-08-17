import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

const Login = () => {
    return (
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", padding:"40px", alignItems:"center"}}>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", color:"#0474BA", fontWeight:"bold", fontSize:"30px", textAlign:"center"}}>Welcome to KamiConnekt</div>
            <div id="institute-container" style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "30%", padding: "40px", gap: "10px" }}>
                <input style={{ padding: "10px", width: "80%", border: "none", borderRadius: "5px", borderColor: "#D1EDFE", borderStyle: "solid", borderWidth: "2px" }} type="email" name="" id="" placeholder="Email" />
                <input style={{ padding: "10px", width: "80%", border: "none", borderRadius: "5px", borderColor: "#D1EDFE", borderStyle: "solid", borderWidth: "2px" }} type="password" name="" id="" placeholder="Password" />
                <p style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px", fontSize: "12.5px", color: "#9B9B9B", fontWeight: "normal" }}><div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><Icon style={{ fontSize: "25px" }} icon="material-symbols:shield-lock" color="#0474BA" /></div> Your data is secure with us</p>
                <Link style={{ width: "40%", padding: "10px", border: "none", borderRadius: "5px", backgroundColor: "#0474BA", color: "#fff", fontWeight: "bold", textDecoration:"none"}}>Login</Link>
                <p style={{ fontSize: "13.5px", color: "#2E2E2E" }}>By proceeding ahead you expressly agree to KamiConneKt's <a href="" style={{ textDecoration: "none", color: "#0474BA" }}>Terms & Conditions</a> and <a href="" style={{ textDecoration: "none", color: "#0474BA" }}>Privacy Policy</a></p>
            </div>
        </div>
    )
}
export default Login;