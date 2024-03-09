import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import cart_icon from "../Assets/cart_icon.png";
import logo from "../Assets/logo.png";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setmenu] = useState("shops");
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPIFY</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setmenu("shops");
          }}>
          <Link
            style={{ textDecoration: "none" }}
            to="/"
            className={menu === "shops" ? "active" : ""}>
            Shop
          </Link>
        </li>
        <li
          onClick={() => {
            setmenu("mens");
          }}>
          <Link
            style={{ textDecoration: "none" }}
            to="/mens"
            className={menu === "mens" ? "active" : ""}>
            Men
          </Link>
        </li>
        <li
          onClick={() => {
            setmenu("womens");
          }}>
          <Link
            style={{ textDecoration: "none" }}
            to="/womens"
            className={menu === "womens" ? "active" : ""}>
            Women
          </Link>
        </li>
        <li
          onClick={() => {
            setmenu("kids");
          }}>
          <Link
            style={{ textDecoration: "none" }}
            to="/kids"
            className={menu === "kids" ? "active" : ""}>
            Kids
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
