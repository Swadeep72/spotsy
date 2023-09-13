import React from "react";
import Footer_Block from "./Footer/Footer_Block";
import Footer_Copyright from "./Footer/Footer_Copyright";
import Footer_Image from "./Footer/Footer_Image";
import Footer_Social from "./Footer/Footer_Social";

const Footer = () => (
  <div className="footer">
    <Footer_Image />
    <Footer_Block />
    <Footer_Social />
    <Footer_Copyright />
  </div>
);

export default Footer;
