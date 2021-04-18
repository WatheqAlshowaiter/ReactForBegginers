import React, { Component } from "react";

export default class Button extends Component {
	buttonClicked = (e) => {
		console.log("button clicked ");
		console.log(e.type);
		console.log(this);
	};
	render() {
		return <button onClick={this.buttonClicked}>Click Me!</button>;
	}
}
