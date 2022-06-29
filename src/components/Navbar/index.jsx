/** @format */

import React from "react";
import { Link } from "react-router-dom";
import logout from "./logout.png";

const NavBar = () => (
  <nav sticky="top" className="navbar navbar-dark bg-dark navbar-expand-md sticky-nav">
    <div class="input-group rounded">
      <input
        type="text"
        class="form-control rounded"
        placeholder="Type your URL here..."
        style={{
          marginLeft: "300px",
          marginRight: "520px",
          backgroundColor: "transparent",
          display: "inline",
        }}
      />
      <li style={{ listStyle: "none", marginLeft: "-100px" }}>
          <Link
            to="/dashboard"
            style={{
              marginLeft: "-400px",
              borderRadius: "3px solid black",
              letterSpacing: ".1px",
              width: "10rem"
            }}
            className="btn btn-dark"
          >
            Create Short URL
          </Link>
        </li>
    </div>

    <div className="collpase navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li
          className="navbar-item"
          style={{ float: "right", marginLeft: "10px" }}
        >
          <Link to="/" className="nav-link">
            <img src={logout} alt="logout" style={{ width: "1.4rem" }} />
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
