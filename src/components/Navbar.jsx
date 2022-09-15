import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { NavLink } from "react-router-dom";
import { BsFillMoonFill } from "react-icons/bs";
import { JsonLd } from "react-schemaorg";


export default function Header({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);
  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
            <NavLink to="/" ><img src="https://imgur.com/b0zS5K4.png" alt="logo" /></NavLink>
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
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.dotfordummies.com"
          },
          "headline": "Dot for Dummies",
          "description": "A Comprehensive Reading List for Polkadot",
          "image": "https://imgur.com/b0zS5K4.png",
          "author": {
            "@type": "Organization",
            "name": "Dot for Dummies",
            "url": "https://imgur.com/b0zS5K4.png"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Dot for Dummies",
            "logo": {
              "@type": "ImageObject",
              "url": "https://imgur.com/b0zS5K4.png"
            }
          },
          "datePublished": "2022-09-09",
          "dateModified": "2022-09-09"

        }}
      />
    </nav>
  );
}
