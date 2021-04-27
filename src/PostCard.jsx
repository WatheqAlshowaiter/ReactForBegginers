import React from "react";
import Card from "./Card";

const CardControls = (props) => (
	<div className="card-controls">{props.children}</div>
);
const PostBody = (props) => <div className="card-body">{props.children}</div>;
const PostTitle = (props) => <div className="card-title">{props.children}</div>;

export default function PostCard(props) {
	return (
		<Card>
			<PostBody>{props.title}</PostBody>
			<PostTitle>{props.body}</PostTitle>
			<CardControls>{props.controls}</CardControls>
		</Card>
	);
}
