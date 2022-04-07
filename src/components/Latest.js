import React from "react";
import Card from "./Card";
import "../sass/index.scss";
import { articles } from "../api";


export default function Latest({ image, title, author, url,index }) {

  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title">Latest</h2>
      </div>
      <div className="cards">
        {articles.filter(item => item.categories && item.categories.some(category_name => category_name === 'latest')).slice(0, 6).map(article => {
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
