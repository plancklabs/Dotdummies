import React from "react";
import { JsonLd } from "react-schemaorg";

export default function Like() {
  return (
    <div className="like">
      <div className="container">
        <div className="content">
          <div className="image">
            {/* <img src={eth1} alt="eth1" /> */}
          </div>
          <h2 className="title">An NFT like no other</h2>
          <p className="description">
            Don't miss out on the release of our new NFT. Sign up below to
            recieve updates when we go live on 11/22.
          </p>
          <p className="description">
            Don't miss out on the release of our new NFT. Sign up below to
            recieve updates when we go live on 11/22. Don't miss out on the
            release of our new NFT.
          </p>
        </div>
        <div className="content">
          <div className="image">
            {/* <img src={eth2} alt="eth2" /> */}
          </div>
          <h2 className="title">An NFT like no other</h2>
          <p className="description">
            Don't miss out on the release of our new NFT. Sign up below to
            recieve updates when we go live on 11/22.
          </p>
          <p className="description">
            Don't miss out on the release of our new NFT. Sign up below to
            recieve updates when we go live on 11/22. Don't miss out on the
            release of our new NFT.
          </p>
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
