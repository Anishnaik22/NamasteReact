import React from "react";
import {LOGO_URL} from "../utils/constants"
import React, { useState } from 'react';

export const Header = () => {
    const [btnNameReact,setBtnNameReact] = useState("Login"); 

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
            <li>Cart</li>
            <button className="Login" onClick={() =>{
              setBtnNameReact("Logout")
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Header;