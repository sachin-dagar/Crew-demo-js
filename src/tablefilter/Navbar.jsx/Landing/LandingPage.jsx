
import React from 'react';
import Navbar from '../NavbarLanding';
import './LandingPage.css';
import LandingMain from "../../../assets/LandingMain.svg";


const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar/>
      <div className="background-image">
        <img src= {LandingMain} alt="Background" className="background-logo"/>
      </div>
    </div>
  );
};

export default LandingPage;


