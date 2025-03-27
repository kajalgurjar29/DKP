import React from "react";
import Banner from "./HomePage/Banner";
import "./HomePage/HomePage.css";
import HomeFeatures from "./HomePage/HomeFeatures";
import Goals from "./HomePage/Goals";
import Members from "./HomePage/Members";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="Main_Layout_container">
      <Banner />
      <HomeFeatures />
      <Goals />
      <Members />
      <Footer />
    </div>
  );
};

export default Layout;
