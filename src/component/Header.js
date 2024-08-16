import React from "react";
import {LOGO_URL} from "../utils/constants"

const Header = () => {
    return (
      <div className="header">
        <div>
          <img
            className="logo"
            alt="logo"
            src={LOGO_URL}
          ></img>
        </div>
  
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Logout</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Header;