import React from "react";

const info = {
	id: 1,
	name: "hasan",
	email: "email@email.com",
};
export default function User(props) {
	return (
		<div>
			<h1>Users info</h1>
			{props.children(info)}
		</div>
	);
}
