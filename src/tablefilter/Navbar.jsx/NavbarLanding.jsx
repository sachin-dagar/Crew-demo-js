import React, { useState } from "react";
import "./Navbar.css";
import IndigoLogo from "../../assets/IndigoLogo.svg";

import { Link } from "react-router-dom";
import DownArrowIcon from "../../assets/vectors/Downarrow.svg";
import UpArrowIcon from "../../assets/vectors/UpArrowIcon.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={IndigoLogo} alt="IndiGo Logo" className="Indigologo" />
      </div>
      <div className="dropdown">
        <button onClick={toggleDropdown} className="dropdown-button">
          Allowances
          <img
            src={isOpen ? UpArrowIcon : DownArrowIcon}
            alt=""
            className="arrow"
          />
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
            <li className="dropdown-item">
              <Link to="" className="link">
                {" "}
                Domestic{" "}
              </Link>
            </li>
            <li className="dropdown-item">
              {" "}
              <Link to="" className="link">
                International
              </Link>
            </li>
            <Link to="/admin" className="link">
              <li className="dropdown-item"> Admin</li>
            </Link>

            <li className="dropdown-item">
              <Link to="" className="link">
                Meals
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
