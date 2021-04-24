import React, { Component } from "react";
import ItemInput from "../item-input/ItemInput";
import "./list-items.css";

const itemIsCheckedByDefault = false;

function DisplayItems(props) {
	let { items, onCheck } = props;
	console.log(items);

	if (items.length === 0) return null;
	const detectItemCheckStatus = (e, item, index) => {
		item.checked = e.target.checked;

		onCheck(item, index);
	};
	return (
		<ul className="list-items">
			{items.map((item, index) => {
				let id = "item-checbox-" + index;
				return (
					<li className="list-item" key={index}>
						<input
							defaultChecked={itemIsCheckedByDefault}
							onChange={(e) => detectItemCheckStatus(e, item, index)}
							type="checkbox"
							id={id}
						/>
						<label htmlFor={id}> {item.text}</label>
					</li>
				);
			})}
		</ul>
	);
}

export default class ListItems extends Component {
	state = {
		name: "Todo",
		items: [],
		inputIsOpened: false,
		totalCompleted: 0,
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

	updateItem = (item, index) => {
		let items = this.state.items;

		// update item
		// items[index] = item; // a prolem here , do not know why

		// let totalCompletedItems = items.reduce((totalChecked, item)=>{
		// return totalChecked + (item.checked ? 1: 0)
		// },0)

		// this.setState({
		// items
		// })
		return "";
	};

	addNewItem = (value) => {
		let items = this.state.items;
		items.push({
			text: value,
			checked: false,
		});
		this.setState({
			items,
		});
	};

	render() {
		return (
			<div className="list-items-container">
				<h1>
					{this.state.name}: {this.state.totalCompleted} /{" "}
					{this.state.items.length}
				</h1>
				<button onClick={this.openInput} className="add-input-button">
					Add Input
				</button>{" "}
				<ItemInput
					open={this.state.inputIsOpened}
					onFinish={this.addNewItem}
					onClose={this.closeInput}
					placeholder="writh list item then click Enter"
				/>
				<DisplayItems onCheck={this.updateItem} items={this.state.items} />
			</div>
		);
	}
}
