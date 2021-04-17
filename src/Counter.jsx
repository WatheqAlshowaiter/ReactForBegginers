import React from "react";

export default class Counter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			totalClicks: 0,
		};
		// this.increaseCLicks = this.increaseCLicks.bind(this); // you can do it here or in the component you will call thr function in
	}
	// new way of creating states in Class Components in React
	// state = {
	// 	totalClicks: 0,
	// };
	increaseCLicks() {
		this.setState({
			totalClicks: this.state.totalClicks + 1,
		});
	}

	render() {
		return (
			<div>
				<h2>Counter color: {this.props.color}</h2>
				<h2>Counter size: {this.props.size}</h2>
				<h1>Total CLicks: {this.state.totalClicks}</h1>
				<p>colored? {this.props.colored.toString()}</p>
				<p>number: {this.props.number}</p>
				<p>counter text: {this.props.children}</p>
				<button onClick={this.increaseCLicks.bind(this)}>
					Increase clicks
				</button>
			</div>
		);
	}
}
