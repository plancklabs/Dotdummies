import React from "react";
import Card from "./Card";
import "../sass/index.scss";
import { articles } from "../api";


export default function Deep({ image, title, author, url,index }) {

  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title">Deep dive</h2>
      </div>
      <div className="cards">
        {articles.filter(item => item.categories && item.categories.some(category_name => category_name === 'deep-dive')).slice(0, 8).map(article => {
          return (
            <Card
            image={article.image}
            title={article.title}
            author={article.author}
            url={article.url}
            key={article.index}
          />)
        })}
      </div>
    </div>      
  );
}
