import React, { Component } from "react";
import "./list-items.css";

export default class ListItems extends Component {
	state = {
		items: [],
		inputIsOpened: false,
	};

	openInput = () => {
		this.setState({
			inputIsOpened: true,
		});
	};

	addNewItems = () => {};

	render() {
		return (
			<div className="list-items-container">
				<h1>List Items: {this.state.items.length}</h1>
				<button onClick={this.openInput} className="add-input-button">
					Add Input
				</button>{" "}
				{this.state.inputIsOpened && (
					<input placeholder="writh list item then click Enter" />
				)}
			</div>
		);
	}
}
