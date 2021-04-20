import React, { Component } from "react";
import "./input.css";

export default class Input extends Component {
	constructor(props) {
		super(props);

		this.inputRef = React.createRef();
	}

	getInputName() {
		return "hasan";
	}

	componentDidMount() {
		setTimeout(() => {
			this.inputRef.current.focus();
		}, 3000);
	}
	render() {
		return <input {...this.props} ref={this.inputRef} />;
	}
}
