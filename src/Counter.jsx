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
				<h1>Total CLicks: {this.state.totalClicks}</h1>
				<button onClick={this.increaseCLicks.bind(this)}>
					Increase clicks
				</button>
			</div>
		);
	}
}
