import React from "react";
import icon from "../assets/icon.png";


export default function Free() {
  return (
    <div className="free">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
        <div className="content">
          <div className="image">
            <img src={icon} alt="icon" />
          </div>
          <h2 className="title">Learn more about polkadot from basic</h2>
          <p className="description">
          Find all the relevant articles around the Dotsama ecosystem
          </p>
        </div>
      </div>
      
    </div>
  );
}
