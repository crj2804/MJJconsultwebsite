import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "../styling/nav.scss";

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <h1> MJJ Consulting </h1>
        <nav className="nav-collapse" role="navigation">
          <ul className="tabs primary-nav">
            <li className="tabs__item">
              <NavLink className="tabs__link" to="/">
                Home
              </NavLink>
            </li>
            <li className="tabs__item">
              <NavLink className="tabs__link" to="/about">
                About
              </NavLink>
            </li>
            <li className="tabs__item">
              <NavLink className="tabs__link" to="/advantages">
                Advantages
              </NavLink>
            </li>
            <li className="tabs__item">
              <NavLink className="tabs__link" to="/contact">
                Contact Us
              </NavLink>
            </li>
            <li className="tabs__item">
              <ul>
                <NavLink className="tabs__link" to="#">
                  More
                </NavLink>
                <li className="tabs__dropdown">
                  <NavLink className="dropdown" to="/missionstatement">
                    Mission Statement
                  </NavLink>
                  <NavLink className="dropdown" to="/advantages">
                    ...
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
