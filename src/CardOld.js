import React, { Component } from "react";

export default class Card extends Component {
	render() {
		// let paragraph;
		// if (this.props.displayTextPositive === true) {
		// 	paragraph = <p>this is the positive text for {this.props.cardHeading}</p>;
		// } else {
		// 	paragraph = <p>this is the negative text for {this.props.cardHeading}</p>;
		// }
		return (
			<div>
				<h1>{this.props.cardHeading}</h1>
				{this.props.displayTextPositive ? (
					<p>this is the positive text for {this.props.cardHeading}</p>
				) : (
					<p>this is the negative text for {this.props.cardHeading}</p>
				)}
			</div>
		);
	}
}
