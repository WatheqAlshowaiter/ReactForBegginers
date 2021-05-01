import React from "react";

export default function Post(props) {
	console.log(props.match.params.postId);
	return (
		<div>
			<h1>Post Page ID: {props.match.params.postId}</h1>
		</div>
	);
}
