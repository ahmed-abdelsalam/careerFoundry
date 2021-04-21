import React from "react";
import { Link } from "react-router-dom";
import './Nav.scss'
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-bottom">
      <div className="container-fluid">
          <Link
          className="navbar-brand"
          to='/'
          >
            <img className="cf_logo" src={`https://images.careerfoundry.com/public/logo/cf_logo_min_full.svg`} alt=""/>
          </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/calender">
              Meet our mentors
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              Graduate outcomes

              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Events
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
            <div className="nav-item">
                <Link
                className="nav-link"
                tabIndex="-1"
                aria-disabled="true"
                to="/students/sign_in"
                refresh={true}
                >
                    Log In
                </Link>
            </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
