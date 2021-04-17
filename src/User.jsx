import React, { Component } from "react";

export default class User extends Component {
	user = {
		id: 1,
		name: "Hasan",
		email: "hasanemail@gmail.com",
	};
	renderUserInfo() {
		return Object.keys(this.user).map((key) => {
			const value = this.user[key];
			return (
				<div key={key}>
					<strong>{key}: </strong>
					<span>{value}</span>
				</div>
			);
		});
	}
	render() {
		return (
			<div>
				<h1>User info</h1>
				{this.renderUserInfo()}
			</div>
		);
	}
}
