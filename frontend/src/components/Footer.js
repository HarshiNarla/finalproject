import React from "react";
import "../assets/styles.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img
            src="https://static.vecteezy.com/system/resources/previews/024/452/314/non_2x/pet-shop-logo-design-with-puppy-in-the-middle-of-dog-paws-animal-stencil-flat-illustration-vector.jpg"
            alt="Logo"
          />
          <p>Because every paw deserves a little extra love</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p><ion-icon name="location-outline"></ion-icon> PAWSIFY, Pawtopia</p>
          <p><ion-icon name="call-outline"></ion-icon> +91 903 090 1000</p>
          <p><ion-icon name="mail-outline"></ion-icon> pawsify@petcare.com</p>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
            <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
            <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
            <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
          </div>
        </div>

        <div className="footer-newsletter">
          <h4>Subscribe to Our Channel</h4>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 pawsify. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
