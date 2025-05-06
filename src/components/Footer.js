import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-column">
          <h3>Tradecraft</h3>
          <p>
            Quality commodities from farm to market, delivering excellence in
            every grain and fruit.
          </p>
          {/* <div className="social-icons">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
          </div> */}
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/certificates">Certificates</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Products</h4>
          <ul>
            <li>
              <Link to="/products#coconut">Coconut Products</Link>
            </li>
            <li>
              <Link to="/products#rice">Rice Varieties</Link>
            </li>
            <li>
              <Link to="/products#onion">Onions</Link>
            </li>
            <li>
              <Link to="/products#fruits">Fresh Fruits</Link>
            </li>
            <li>
              <Link to="/products#others">Other Food Products</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <ul className="contact-info">
            <li>
              <i className="fas fa-map-marker-alt"></i>{" "}
              <p>
                Maharashtra: 513, 5th Floor, Shree Samart Plaza, Gupta Bhavan,
                RRT Road, Opp. Mulund West Railway Station, Mumbai 400080
                <br />
                Karnataka: GRACE, 265-4(3), Mangala Colony, Off Alevoor Road,
                Manipal, Udupi District, Karnataka 576104.
              </p>
            </li>
            <li>
              <i className="fas fa-phone"></i> <a href="tel:+919819830716">+91 9819830716</a>
            </li>
            <li>
              <i className="fas fa-envelope"></i> <a href="mailto:trading@tradecraft.co.in">trading@tradecraft.co.in</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Tradecraft. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
