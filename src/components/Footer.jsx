import React from "react";
import { BsTwitter, BsGithub, BsReddit } from "react-icons/bs";
import { JsonLd } from "react-schemaorg";

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
    </footer>
  );
}
