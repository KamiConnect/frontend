import React from "react";
import ur from "../Assets/ur.png"
import alu from "../Assets/alu.png"
import cmu from "../Assets/cmu.png"

const Home=()=>{
    return(
        <div>
            <div>
                <p>Only government approved universities</p>
                <div>
                    <div><img src={ur} alt="" /></div>
                    <div><img src={alu} alt="" /></div>
                    <div><img src={cmu} alt="" /></div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Home;