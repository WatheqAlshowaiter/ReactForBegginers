import React from "react";
import UserCard from "./UserCard";
import "./card-syles.css";

export default function PostCard() {
	return (
		<div className="post-card">
			<h3>Post Card</h3>
			<UserCard />
		</div>
	);
}
