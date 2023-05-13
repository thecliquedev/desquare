import React from "react";
import { NavLink, Link } from "react-router-dom";
import facebook from "bootstrap-icons/icons/facebook.svg";
import instagram from "bootstrap-icons/icons/instagram.svg";
import youtube from "bootstrap-icons/icons/youtube.svg";
export default function Nav() {
  return (
    <React.Fragment>
      <nav className="navigation-bar animated fadeInDown delayBy2 hidden-xs hidden-sm">
        <Link to="/index">
          <img src={`${process.env.PUBLIC_URL}/img/logo.png`} />
        </Link>
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/our-work">Our Works</NavLink>
          </li>
          <li>
            <NavLink to="/publications">Publications & Awards</NavLink>
          </li>
          <li>
            <NavLink to="/contact-us">Contact Us</NavLink>
          </li>
          <li style={{ marginRight: 0 }}>
            <a href="https://www.facebook.com/DESQUARE1" target="_blank">
              <img style={{ width: 32, padding: 0 }} src={facebook} />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/desquarearchitects" target="_blank">
              <img style={{ width: 32, padding: 0 }} src={instagram} />
            </a>
          </li>
          <li style={{ marginLeft: 0 }}>
            <a
              href="https://youtube.com/channel/UCoZ84nH_A2451ti80hcWHeA"
              target="_blank"
            >
              <img style={{ width: 32, padding: 0 }} src={youtube} />
            </a>
          </li>
        </ul>
      </nav>

      <nav className="navbar navbar-inverse hidden-md hidden-lg">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <NavLink className="navbar-brand" to="/index">
              <img
                src={`${process.env.PUBLIC_URL}/img/logo.png`}
                alt=""
                width="150px"
              />{" "}
            </NavLink>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li>
                <NavLink to="/#">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/our-work">Our Works</NavLink>
              </li>
              <li>
                <NavLink to="/publications">Publications & Awards</NavLink>
              </li>
              <li>
                <NavLink to="/contact-us">Contact Us</NavLink>
              </li>
              <li style={{ marginRight: 0 }}>
                <a href="https://www.facebook.com/DESQUARE1" target="_blank">
                  <img style={{ width: 32, padding: 0 }} src={facebook} />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/desquarearchitects"
                  target="_blank"
                >
                  <img style={{ width: 32, padding: 0 }} src={instagram} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
