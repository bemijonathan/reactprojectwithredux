import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="blue darken-2">
        <div className="container">
          <div class="nav-wrapper">
            <Link to="/" class="brand-logo">
              Logo
            </Link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <Link to="#">New Project</Link>
              </li>
              <li>
                <Link to="#">Logout</Link>
              </li>
              <li>
                <Link
                  to="#"
                  class="btn-floating btn-large waves-effect waves-light red"
                >
                  AJ
                </Link>
              </li>
              {1 + 1 === 2 ? (
                ""
              ) : (
                <li>
                  <Link to="#">sign Up</Link>
                </li>
              )}
              {1 + 1 === 2 ? (
                ""
              ) : (
                <li>
                  <Link to="#">Log In</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
