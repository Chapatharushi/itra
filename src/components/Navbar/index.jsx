/** @format */

import React from "react";
import { Link } from "react-router-dom";
import logout from "./logout.png";
import send from "./send.png";
import workspace from "./workspace.png";

const NavBar = () => (
  <nav className="navbar navbar-dark bg-dark navbar-expand-md">
    <Link to="/dashboard" className="navbar-brand">
      Itra
    </Link>

    <div class="input-group rounded">
      <input
        type="text"
        class="form-control rounded"
        placeholder="Type your URL here..."
        style={{
          marginLeft: "150px",
          marginRight: "200px",
          width: "10px",
          backgroundColor: "transparent",
          display: "inline",
        }}
      />
      <li
        className="navbar-item"
        style={{
          marginRight: "150px",
          marginLeft: "-200px",
          display: "inline",
        }}
      >
        <Link to="/" className="nav-link">
          <img src={send} alt="send" style={{ width: "1.5rem" }} />
        </Link>
      </li>
    </div>

    <div className="collpase navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li
          className="navbar-item"
          style={{ float: "right", marginLeft: "50px" }}
        >
          <Link to="/" className="nav-link">
            <img src={workspace} alt="workspace" style={{ width: "2rem" }} />
          </Link>
        </li>
        <li
          className="navbar-item"
          style={{ float: "right", marginLeft: "10px" }}
        >
          <Link to="/" className="nav-link">
            <img src={logout} alt="logout" style={{ width: "2rem" }} />
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
