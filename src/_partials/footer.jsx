import React from "react";
import Logo from "../assets/imgs/App Icon/PNG/footer/Layer 14.png"
import Logo2 from "../assets/imgs/App Icon/PNG/White.png"
import * as Icon from 'react-feather';
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
    <div className="py-4  d-flex justify-content-center align-items-center flex-column footer-container mt-auto">
      <div className="footer-logo">
        <Link to="/"> <img className="footer-social-link" src={Logo} alt="social1" /></Link>
      </div>
      <div className="footer-contact d-flex justify-content-center align-items-center flex-column ">
        <span className="d-flex"> <Icon.Phone color="white" className="footer-call pr-2" />    +1-111-683-8980</span>
        <span className="d-flex mt-2"> <Icon.Mail color="white" className="footer-call  pr-2" />  Start a live Chat</span>
      </div>
      <div className=" d-flex justify-content-center align-items-center flex-wrap footer-links">
        <Link className="footer-link" to="/"> Return Policy   </Link>
        <Link className="footer-link ml-5" to="/"> Shipping     </Link>
        <Link className="footer-link ml-5" to="/">   Warranty   </Link>
        <Link className="footer-link ml-5" to="/">   Privacy Policy   </Link>

      </div>
      <div className="  d-flex justify-content-center align-items-center  footer-social-links pt-4">
        <Link to="/">  <Icon.Twitter color="white" className="footer-call mr-4" />     </Link>
        <Link to="/">  <Icon.Instagram color="white" className="footer-call mr-4" />     </Link>
        <Link to="/">  <Icon.Facebook color="white" className="footer-call  " />     </Link>

      </div>
      <div className="footer-lower-logo d-flex  align-items-center mt-4">
        <Link to="/"><img src={Logo2} alt="social1" /></Link>
        <span className="footer-small-text ml-2">Term and Policy +1-345-234-2342</span>
      </div>
    </div>
    </>
  );
};
export default Footer;

