import React, { Component, PureComponent } from "react";

export default class Pure extends PureComponent {
	state = {
		name: "Hasan",
	};
	changeName = (e) => {
		this.setState({
			name: "Hasan",
		});
	};
	render() {
		console.log("100");
		return (
			<>
				<input value={this.state.name} onChange={this.changeName} />
			</>
		);
	}
}
