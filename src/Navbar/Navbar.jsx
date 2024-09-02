import React from "react";
import "./Navbar.css";
import IndigoLogo from "../assets/IndigoLogo.svg";
import AdminIcon from "../assets/vectors/AdminIcon.svg";

import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="header">
      <div className="Indigologo">
     <Link to= "/"> <img src={IndigoLogo} alt=""  /> </Link>

      </div>
      <div className="header-name">
       <div className="header-name-icon"><img src={AdminIcon} alt=""  /> </div>

       <div className="header-name-text">Admin</div>
      </div>
    </div>
  );
};


 