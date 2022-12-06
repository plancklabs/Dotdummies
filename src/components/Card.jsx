import React from "react";
import { JsonLd } from "react-schemaorg";
import "./Newcard.css"
import {Card, Col, Row } from "react-bootstrap";


export default function Cards({ image, title, author, url }) {
	return (
		<>
			<section className="container-fluid secSpacer ">
				<div className="container">
					<Row>
						<Col xs={12} md={6} lg={4}>
							<Card style={{ width: "20rem", height: "27rem" }}>
								<Card.Img
									variant="top"
									src={image} alt="super1"
								/>
								<Card.Body>
									<Card.Text>
										{title}
									</Card.Text>
								</Card.Body>
								<div class="card-footer">
									<button class="btn btn-success">{author}</button>
									<button class="btn btn-border"><a
										href={url}
									>
										Read More
									</a></button>
								</div>
							</Card>
						</Col>
					</Row>
				</div>
			</section>
			{/*  */}

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

		</>
	);
}
