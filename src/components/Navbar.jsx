import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { NavLink } from "react-router-dom";
import { BsFillMoonFill } from "react-icons/bs";

export default function Header({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);
  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
        <a href="/"  ><img src="https://imgur.com/b0zS5K4.png" alt="logo" /></a>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavState(true)} />
            )}
          </div>
          <div className="mode" onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </div>
        </div>
      </div>
      <div className={`links-container ${navState ? "nav-visible" : ""}`}>
        <ul className="links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/articles">Articles</NavLink>
          </li>
           <li>
            <NavLink to="/back-to-basics">Back to basics</NavLink>
          </li>
          <li>
            <a href="https://bitcharge.co/plancklabs" target='blank'> Donate</a>
          </li>
          
          <li onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
