import React, { Component } from "react";
import ItemInput from "../item-input/ItemInput";
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

	closeInput = () => {
		this.setState({
			inputIsOpened: false,
		});
	};

	addNewItem = (value) => {
		let items = this.state.items;
		items.push(value);
		this.setState({
			items,
		});
	};

	render() {
		return (
			<div className="list-items-container">
				<h1>List Items: {this.state.items.length}</h1>
				<button onClick={this.openInput} className="add-input-button">
					Add Input
				</button>{" "}
				{this.state.inputIsOpened && (
					<ItemInput
						onFinish={this.addNewItem}
						onClose={this.closeInput}
						placeholder="writh list item then click Enter"
					/>
				)}
				<ul className="list-items">
					{this.state.items.map((item, index) => {
						return (
							<li className="list-item" key={index}>
								{item}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
