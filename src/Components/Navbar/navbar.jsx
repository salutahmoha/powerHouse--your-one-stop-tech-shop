import React from "react";
import "./navbar.css";
import {
  FaSquareFacebook,
  FaXTwitter,
  FaSquareInstagram,
  FaTiktok,
} from "react-icons/fa6";

function navbar() {
  return (
    <section id="navbar">
      <div className="container" id="navbar">
        <div className="navbar-socials">
          <div className="socials">
            <FaSquareFacebook size={20}/>
            <h4 navbar-socials-text>PowerHouse</h4>
          </div>
          <div className="socials">
            <FaXTwitter size={20}/>
            <h4 navbar-socials-text>PowerHouse</h4>
          </div>
          <div className="socials">
            <FaSquareInstagram size={20}/>
            <h4 navbar-socials-text>PowerHouse</h4>
          </div>
          <div className="socials">
            <FaTiktok size={20}/>
            <h4 navbar-socials-text>PowerHouse</h4>
          </div>
        </div>
        <div className="navbar-lists">
          <div className="logo-text">
            <h2>PowerHouse</h2>
          </div>
          <ul className="nav-items">
            <li className="nav-list">
              <a href="/">Home</a>
            </li>

            <li className="nav-list">
              <a href="/about">About</a>
            </li>

            <li className="nav-list">
              <a href="/products">Products</a>
            </li>

            <li className="nav-list">
              <a href="/staff">Staff</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default navbar;
