import React from "react";
import { BlogPosting } from "schema-dts";
import { JsonLd } from "react-schemaorg";

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


// 

// <script type="application/ld+json">
// {
//   "@context": "https://schema.org",
//   "@type": "BlogPosting",
//   "mainEntityOfPage": {
//     "@type": "WebPage",
//     "@id": "https://www.dotfordummies.com"
//   },
//   "headline": "Dot for Dummies",
//   "description": "A Comprehensive Reading List for Polkadot",
//   "image": "https://imgur.com/b0zS5K4.png",  
//   "author": {
//     "@type": "Organization",
//     "name": "Dot for Dummies",
//     "url": "https://imgur.com/b0zS5K4.png"
//   },  
//   "publisher": {
//     "@type": "Organization",
//     "name": "Dot for Dummies",
//     "logo": {
//       "@type": "ImageObject",
//       "url": "https://imgur.com/b0zS5K4.png"
//     }
//   },
//   "datePublished": "2022-09-09",
//   "dateModified": "2022-09-09"
// }
// </script>