import React from "react";
import "../assets/styles.css"; // Include your CSS file here for styling

function NavBar() {
  return (
    <nav className="navbar">
      <img
        className="logo"
        src="https://static.vecteezy.com/system/resources/previews/024/452/314/non_2x/pet-shop-logo-design-with-puppy-in-the-middle-of-dog-paws-animal-stencil-flat-illustration-vector.jpg"
        alt="logo"
        width="150"
        height="80"
      />
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about-us">About Us</a></li>
      </ul>
      <button className="btn"><a href="#login">Login</a></button>
      <button className="btn"><a href="#register">Register</a></button>
    </nav>
  );
}

export default NavBar;
