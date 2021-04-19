import React, { Component } from "react";

class Loader extends Component {
	componentWillUnmount() {
		console.log("componentWillUnmount");
	}
	render() {
		return <div>Loading...</div>;
	}
}

export default class Records extends Component {
	constructor(props) {
		super(props);

		this.state = {
			record: [],
			isLoading: true,
		};

		console.log("constructor 1");
	}

	loadRecord = () => {
		this.setState({
			record: "some records",
			isLoading: !this.state.isLoading,
		});
	};

	render() {
		let records;
		if (this.state.isLoading === true) {
			records = <Loader />;
		} else {
			records = this.state.record;
		}
		return (
			<div>
				<h1>Records List: {records}</h1>
				<button onClick={this.loadRecord}>Add Record</button>
			</div>
		);
	}
	componentDidMount() {
		console.log("componentDidMount");
	}
	componentDidUpdate() {
		console.log("componentDidUpdate");
	}
}
