import React from "react";
import { NavLink } from "react-router-dom";
import "./NotFound.css";

export const NotFound = () => {
  return (
    <div className="flex-center">
      <div className="content-box">
        <div className="text-primary">404</div>

        <div className="text-404">
          <span className="text-red-500">Oops!</span> Page not found
        </div>

        <div className="text-secondary">
          The page you’re looking for doesn’t exist.
        </div>

        <NavLink to="/" className="link-home">
          Go home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;


