import React from "react";
import footerimage from "../assets/Images/footerimage.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer_main_div">
      <div className="background_container">
        <div className="Footer_main_div_cont">
          <p className="Footer_main_div_p">
            Copyright
            <span>
              <i class="bi bi-c-circle"></i>
            </span>
            2025
          </p>
          <img
            className="Footer_main_div_img"
            src={footerimage}
            alt="footerimage"
          />
          <div className="Footer_main_link_div">
            <Link to="/" className="Footer_main_link">
              Terms of Service
            </Link>
            <Link to="/" className="Footer_main_link">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
