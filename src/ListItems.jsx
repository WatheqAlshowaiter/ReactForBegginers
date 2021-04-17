import React, { Component } from "react";

export default class ListItems extends Component {
	items = ["item 1", "item 2", "item 3", "item 4"];

	renderItems() {
		return this.items.map((item, index) => <li key={index}>{item}</li>);
	}
	render() {
		return (
			<div>
				<h1>List Items</h1>
				{this.renderItems()}
			</div>
		);
	}
}
