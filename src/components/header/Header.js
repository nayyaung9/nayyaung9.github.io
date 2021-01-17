import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="site-header">
      <div className="wrapper site-header__wrapper">
        <a href="/" className="brand">
          Nay Yaung 
        </a>
        <nav className="nav">
          <button className="nav__toggle" aria-expanded="false" type="button">
            menu
          </button>
          <ul className="nav__wrapper">
            <li className="nav__item">
              <a href="/">Works</a>
            </li>
            <li className="nav__item">
              <a href="/">Resume</a>
            </li>
            <li className="nav__item">
              <a href="/">Services</a>
            </li>
            <li className="nav__item">
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
