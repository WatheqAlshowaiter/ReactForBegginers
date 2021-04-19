import React from "react";
import ListItem from "./ListItem";
const items = ["item 1 ", "item 2 ", "item 2 ", "item 3 "];

export default function ListItems({ maxItems }) {
	return (
		<div>
			<h1>List Items {maxItems}</h1>
			{items.map((item, index) => {
				return <ListItem key={index} item={item} index={index} />;
			})}
		</div>
	);
}
