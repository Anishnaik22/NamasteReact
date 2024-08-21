import React from "react";
import { LOGO_URL } from "../utils/constants";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="header">
      <div>
        <img className="logo" alt="logo" src={LOGO_URL}></img>
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
        
          <button
            className="Login"
            onClick={() => {
              setBtnNameReact("Logout");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
