import React, { Component } from "react";
import Input from "./Input";

export default class Form extends Component {
	constructor(props) {
		super(props);

		this.inputRef = (element) => {
			setTimeout(() => {
				element.focus();
			}, 3000);
		};
	}

	render() {
		return (
			<form>
				<Input ref={this.inputRef} />
			</form>
		);
	}
}
