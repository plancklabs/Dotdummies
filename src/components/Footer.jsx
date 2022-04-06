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
    // {
    //   title: "Social",
    //   data: ["Twitter", "Github", "Reddit"],
    // },
  ];
  
  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <img src="https://imgur.com/b0zS5K4.png" alt="logo" />
          </div>
          <p>Exclusive Dot For Dummies</p>
          <ul >
            <li>
            <a className="social_link" href='https://github.com/plancklabs/Dotdummies'><BsGithub /></a>
            </li>
            <li>
            <a className="social_link" href="https://twitter.com/DotforDummies"><BsTwitter /></a>
            </li>
            <li>
            <a className="social_link" href='https://www.reddit.com/r/dot/'><BsReddit /></a>
            </li>
          </ul>
        </div>
        <div className="links">

        {/* <p>Social</p>
        <ul>
          <li>
            <a href="/" className="link">Twitter</a>
          </li>
          <li>
            <a href="/" className="link">Github</a>
          </li>
          <li>
            <a href="/" className="link">Reddit</a>
          </li>
          
        </ul> */}

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
