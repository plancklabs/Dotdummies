import React from "react";
import {  BsTwitter, BsGithub, BsReddit } from "react-icons/bs";
export default function Footer() {
  const links = [
    {
      title: "About",
      data: ["About", "Terms", "Legal"],
    },
   
    {
      title: "Contact",
      data: ["Press", "Support"],
    },
    {
      title: "Social",
      data: ["Twitter", "Github", "Reddit"],
    },
  ];
  
  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <img src="https://imgur.com/b0zS5K4.png" alt="logo" />
          </div>
          <p>Exclusive Dot For Dummies</p>
          <ul>
            <li>
            <a href='https://github.com/dotfordummies/dotfordummie'><BsGithub /></a>
            </li>
            <li>
            <a href="https://twitter.com/DotforDummies"><BsTwitter /></a>
            </li>
            <li>
            <a href='https://www.reddit.com/r/dot/'><BsReddit /></a>
            </li>
          </ul>
        </div>
        <div className="links">
          {links.map(({ title, data }, index) => {
            return (
              <div className="link" key={index}>
                <h4 >{title}</h4>
                <ul>
                  {data.map((link, index2) => (
                    <li key={index2}>{link}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lower">
        <span>&copy;Copyright @ 2022 Dotfordummies. All rights reserved.</span>
      </div>
    </footer>
  );
}
