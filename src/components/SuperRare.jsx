import React from "react";
import Card from "./Card";
import { articles } from '../api'

export default function SuperRare() {
  
  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title">Articles</h2>
      </div>
      <div className="cards">
        {articles.map(({ image, title, author, url }, index) => (
          <Card
            image={image}
            title={title}
            author={author}
            url={url}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
