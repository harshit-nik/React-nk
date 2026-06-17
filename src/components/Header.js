import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="header">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
        alt="DelishBite"
        className="logo"
      />

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

          <li>
            <Link to="/cart">Cart</Link>
          </li>

          <button
            className="loginBtn"
            onClick={() =>
              setBtnNameReact(
                btnNameReact === "Login" ? "Logout" : "Login"
              )
            }
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;