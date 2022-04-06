import React from "react";

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
					<a style={{color:"var(--accent-color1)"}}
				href={url}
			>
				Read More
			</a>
				</div>
			
		</div>
	);
}
