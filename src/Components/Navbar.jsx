import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import "../Styles/navbar.css";

const Navbar = () => {
  return (
    <div
      className="navbar-container"
      style={{
        background: "#fff",
        display: "flex",
        padding: "0 40px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ color: "#0474BA", display: "flex", alignItems: "center" }}>
        <img
          src="logo.png"
          alt="Logo"
          style={{ width: "100px", height: "auto", marginRight: "10px" }}
        />
        <p
          className="app-name"
          style={{ fontWeight: "bold", fontSize: "25px" }}
        >
          KamiConnekt
        </p>
      </div>

      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            fontSize: "15px",
          }}
        >
          <p>Online</p>
          <Icon icon="ep:arrow-down-bold" color="0474BA" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            fontSize: "15px",
          }}
        >
          <p>Post-graduation</p>
          <Icon icon="ep:arrow-down-bold" color="0474BA" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            fontSize: "15px",
          }}
        >
          <p>Undergraduate</p>
          <Icon icon="ep:arrow-down-bold" color="0474BA" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            fontSize: "15px",
          }}
        >
          <p>Upskilling Certifications</p>
          <Icon icon="ep:arrow-down-bold" color="0474BA" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            fontSize: "15px",
          }}
        >
          <p>Study abroad</p>
          <Icon icon="ep:arrow-down-bold" color="0474BA" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            fontSize: "15px",
          }}
        >
          <p>Advanced diploma</p>
          <Icon icon="ep:arrow-down-bold" color="0474BA" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
