import React, { Component } from "react";

export default class Card extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>{this.props.cardHeading}</h1>
				{this.props.displayText && (
					<p>this is the text for {this.props.cardHeading}</p>
				)}
			</div>
		);
	}
}
