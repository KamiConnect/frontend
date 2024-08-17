import React, { useState } from "react";
import "../Styles/SignupForm.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "30%",
          padding: "20px",
          backgroundColor: "#F9F9F9",
        }}
      >
        <p style={{ fontSize: "large", marginBottom: "20px" }}>
          Register to dive in
        </p>
        <p
          style={{
            color: "#282336",
            fontSize: "12.5px",
            fontWeight: "20",
            marginBottom: "20px",
          }}
        >
          Already a user?{" "}
          <Link to="/login" style={{ color: "#0474BA", textDecoration: "none" }}>
            Login
          </Link>
        </p>

        <div style={{ display: "flex", gap: "30px" }}>
          <button
            id="user-button"
            onClick={() => handleTabChange("user")}
            style={{
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#0474BA",
              color: "#fff",
              padding: "10px 20px",
              transition: "background-color 0.3s, font-size 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.fontSize = "1.2em";
              e.target.style.backgroundColor = "#0584D4";
            }}
            onMouseLeave={(e) => {
              e.target.style.fontSize = "1em";
              e.target.style.backgroundColor = "#0474BA";
            }}
          >
            User
          </button>

          <button
            id="institute-button"
            onClick={() => handleTabChange("institute")}
            style={{
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#0474BA",
              color: "#fff",
              padding: "10px 20px",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)";
              e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
              e.target.style.backgroundColor = "#0584DA"; // Brighter color
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "none";
              e.target.style.backgroundColor = "#0474BA"; // Original color
            }}
          >
            Institute
          </button>
        </div>
        {activeTab === "user" && (
          <div
            id="user-container"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              padding: "40px",
              gap: "10px",
            }}
          >
            <input
              style={{
                padding: "10px",
                width: "80%",
                border: "none",
                borderRadius: "5px",
                borderColor: "#D1EDFE",
                borderStyle: "solid",
                borderWidth: "2px",
              }}
              type="text"
              name=""
              id=""
              placeholder="Firstname"
            />
            <input
              style={{
                padding: "10px",
                width: "80%",
                border: "none",
                borderRadius: "5px",
                borderColor: "#D1EDFE",
                borderStyle: "solid",
                borderWidth: "2px",
              }}
              type="text"
              name=""
              id=""
              placeholder="Lastname"
            />
            <input
              style={{
                padding: "10px",
                width: "80%",
                border: "none",
                borderRadius: "5px",
                borderColor: "#D1EDFE",
                borderStyle: "solid",
                borderWidth: "2px",
              }}
              type="email"
              name=""
              id=""
              placeholder="email"
            />
            <input
              style={{
                padding: "10px",
                width: "80%",
                border: "none",
                borderRadius: "5px",
                borderColor: "#D1EDFE",
                borderStyle: "solid",
                borderWidth: "2px",
              }}
              type="text"
              placeholder="Enter your preferred degree"
            />
            <input
              style={{
                padding: "10px",
                width: "80%",
                border: "none",
                borderRadius: "5px",
                borderColor: "#D1EDFE",
                borderStyle: "solid",
                borderWidth: "2px",
              }}
              type="password"
              name=""
              id=""
              placeholder="Password"
            />
            <input
              style={{
                padding: "10px",
                width: "80%",
                border: "none",
                borderRadius: "5px",
                borderColor: "#D1EDFE",
                borderStyle: "solid",
                borderWidth: "2px",
              }}
              type="password"
              name=""
              id=""
              placeholder="Confirm password"
            />
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
                fontSize: "12.5px",
                color: "#9B9B9B",
                fontWeight: "normal",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  style={{ fontSize: "25px" }}
                  icon="material-symbols:shield-lock"
                  color="#0474BA"
                />
              </div>{" "}
              Your data is secure with us
            </p>
            <Link
              to="/login"
              style={{
                width: "40%",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#0474BA",
                color: "#fff",
                fontWeight: "bold",
                textDecoration: "none",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
                e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
                e.target.style.backgroundColor = "#0584DA"; // Brighter color
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "none";
                e.target.style.backgroundColor = "#0474BA"; // Original color
              }}
            >
              Sign up
            </Link>

            <p style={{ fontSize: "13.5px", color: "#2E2E2E" }}>
              By proceeding ahead you expressly agree to KamiConneKt's{" "}
              <a href="" style={{ textDecoration: "none", color: "#0474BA" }}>
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="" style={{ textDecoration: "none", color: "#0474BA" }}>
                Privacy Policy
              </a>
            </p>
          </div>
        )}
        {activeTab === "institute" && (
          <div
            id="institute-container"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              padding: "40px",
              gap: "10px",
            }}
          >
            <input
              style={{
                padding: "10px",
                width: "80%",
                border: "none",
                borderRadius: "5px",
                borderColor: "#D1EDFE",
                borderStyle: "solid",
                borderWidth: "2px",
              }}
              type="text"
              name=""
              id=""
              placeholder="Institute name"
            />
            <input
              style={{
                padding: "10px",
                width: "80%",
                border: "none",
                borderRadius: "5px",
                borderColor: "#D1EDFE",
                borderStyle: "solid",
                borderWidth: "2px",
              }}
              type="email"
              name=""
              id=""
              placeholder="Institute email"
            />
            <select name="" id="" style={{
                padding: "10px",
                width: "87%",
                border: "none",
                borderRadius: "5px",
                borderColor: "#D1EDFE",
                borderStyle: "solid",
                borderWidth: "2px",
              }}>
                <option value="">Select the course</option>
                <option value="">Computer science</option>
                <option value="">Mathematics</option>
                <option value="">English</option>
            </select>
            <input
              style={{
                padding: "10px",
                width: "80%",
                border: "none",
                borderRadius: "5px",
                borderColor: "#D1EDFE",
                borderStyle: "solid",
                borderWidth: "2px",
              }}
              type="password"
              name=""
              id=""
              placeholder="Password"
            />
            <input
              style={{
                padding: "10px",
                width: "80%",
                border: "none",
                borderRadius: "5px",
                borderColor: "#D1EDFE",
                borderStyle: "solid",
                borderWidth: "2px",
              }}
              type="password"
              name=""
              id=""
              placeholder="Confirm password"
            />
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
                fontSize: "12.5px",
                color: "#9B9B9B",
                fontWeight: "normal",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  style={{ fontSize: "25px" }}
                  icon="material-symbols:shield-lock"
                  color="#0474BA"
                />
              </div>{" "}
              Your data is secure with us
            </p>
            <Link
              to="/login"
              style={{
                width: "40%",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#0474BA",
                color: "#fff",
                fontWeight: "bold",
                textDecoration: "none",
                transition: "background-color 0.3s, font-size 0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.fontSize = "1.2em";
                e.target.style.backgroundColor = "#0584D4";
              }}
              onMouseLeave={(e) => {
                e.target.style.fontSize = "1em";
                e.target.style.backgroundColor = "#0474BA";
              }}
            >
              Sign up
            </Link>

            <p style={{ fontSize: "13.5px", color: "#2E2E2E" }}>
              By proceeding ahead you expressly agree to KamiConneKt's{" "}
              <a href="" style={{ textDecoration: "none", color: "#0474BA" }}>
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="" style={{ textDecoration: "none", color: "#0474BA" }}>
                Privacy Policy
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupForm;
