import React from "react";

export default function ListItem({ index, item }) {
	return (
		<li>
			<strong>{index + 1}: </strong>
			<span>{item}</span>
		</li>
	);
}
