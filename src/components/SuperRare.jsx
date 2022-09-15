import React from "react";
import Card from "./Card";
import { articles } from '../api'
import { JsonLd } from "react-schemaorg";


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
