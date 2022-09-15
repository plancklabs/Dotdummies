import React from "react";
import { JsonLd } from "react-schemaorg";


export default function Card({ image, title, author, url }) {
	return (
		<div className="card">
			<div className="card-image">
				<img src={image} alt="super1" />
			</div>
			<div className="card-content">
				<div className="card-heading">
					<span className="card-series"></span>
				</div>
				<div className="card-details">
					<h4 className="card-title">{title}</h4>
				</div>
			</div>
			<div className="card-sub-details">
				<span>{author}</span>
				<a style={{ color: "var(--accent-color1)" }}
					href={url}
				>
					Read More
				</a>
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
