import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to={"/AboutUs"}>About Us</NavLink>
      <NavLink to={"/ContactUs"}>Contact Us</NavLink>
    </nav>
  );
};
export default Navbar;
