import React from "react";
import Card from "./Card";
import "../sass/index.scss";
import { articles } from "../api";
import { JsonLd } from "react-schemaorg";



export default function Back({ image, title, author, url,index }) {
  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title">Back to basics</h2>
      </div>
      <div className="cards">
        {articles.filter(item => item.categories && item.categories.some(category_name => category_name === 'back-to-basics')).slice(0, 10).map(article => {
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
    </div>      
  );
}
