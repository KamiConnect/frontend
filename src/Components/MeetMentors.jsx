import React from "react";
import profile from "../Assets/profile.jpg"
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
const MeetMentors = () => {
    return (
        <div style={{ display: "flex", width: "100%", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px", padding: "40px 0px", }}>
            <div style={{ color: "#0474BA", fontWeight: "bolder", fontSize: "50px" }}>Meet with Mentors</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "75%", padding: "10px 30px", backgroundColor: "#DFE7EC", borderRadius: "10px" }}>
                <div id="profile"><img src={profile} alt="" width={40} height={40} style={{ borderRadius: "50px" }} /></div>
                <div id="address" style={{ color: "#272727", fontSize: "15px", display: "flex", flexDirection: "column" }}>
                    <p>Dr. Karly Manis</p>
                    <p>University Rwanda</p>
                    <a href="\" style={{ textDecoration: "none" }}>Business Information Technology</a>
                </div>
                <div>
                    <Link to="/chat"><Icon icon="ep:arrow-right-bold" style={{ cursor: "pointer" }} /></Link>
                </div>
            </div><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "75%", padding: "10px 30px", backgroundColor: "#DFE7EC", borderRadius: "10px" }}>
                <div id="profile"><img src={profile} alt="" width={40} height={40} style={{ borderRadius: "50px" }} /></div>
                <div id="address" style={{ color: "#272727", fontSize: "15px", display: "flex", flexDirection: "column" }}>
                    <p>Mugisha Makyi</p>
                    <p>African Leadershipe University</p>
                    <p>Computer science</p>
                </div>
                <div>
                    <Icon icon="ep:arrow-right-bold" style={{ cursor: "pointer" }} />
                </div>
            </div><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "75%", padding: "10px 30px", backgroundColor: "#DFE7EC", borderRadius: "10px" }}>
                <div id="profile"><img src={profile} alt="" width={40} height={40} style={{ borderRadius: "50px" }} /></div>
                <div id="address" style={{ color: "#272727", fontSize: "15px", display: "flex", flexDirection: "column" }}>
                    <p>Nelson Shay</p>
                    <p>Carnegie Mellon University</p>
                    <p>Data analysis</p>
                </div>
                <div>
                    <Icon icon="ep:arrow-right-bold" style={{ cursor: "pointer" }} />
                </div>
            </div><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "75%", padding: "10px 30px", backgroundColor: "#DFE7EC", borderRadius: "10px" }}>
                <div id="profile"><img src={profile} alt="" width={40} height={40} style={{ borderRadius: "50px" }} /></div>
                <div id="address" style={{ color: "#272727", fontSize: "15px", display: "flex", flexDirection: "column" }}>
                    <p>Shaffy Mady</p>
                    <p>University of Kenya</p>
                    <p>Software engineering</p>
                </div>
                <div>
                    <Icon icon="ep:arrow-right-bold" style={{ cursor: "pointer" }} />
                </div>
            </div>
        </div>
    )
}
export default MeetMentors;