import React, { Component } from "react";
import Input from "./Input";

export default class Form extends Component {
	constructor(props) {
		super(props);

		this.getInputComponentRef = (inputComponent) => {
			console.log(inputComponent.getInputName());
		};
	}

	render() {
		return (
			<form>
				<Input ref={this.getInputComponentRef} />
			</form>
		);
	}
}
