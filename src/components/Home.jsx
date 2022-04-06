import React from "react";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">Dot For Dummies</p>
          <h1 className="title">A Comprehensive Reading List for Polkadot</h1>
          <p className="description">
            Find all the relevant articles around the Dotsama ecosystem
          </p>
          <a href="/articles"><button>Read More</button></a>
        </div>
        <div className="image-container">
          <div className="image">
            <img src="https://imgur.com/22cvGQJ.png" alt="home" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>

    </div>
  );
}
