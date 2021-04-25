import React from "react";
import UserContext from "./UserContext";

export default function UserInfo() {
	let user = React.useContext(UserContext);
	return (
		<div className="user-info">
			<h3>User Info</h3>
			<h1>Hello: {user.name}</h1>
		</div>
	);
}
