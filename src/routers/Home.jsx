import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div>
			<h1>Homes</h1>
			<ul>
				<li>
					<Link to="/about">About us</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="post/123">post page 123</Link>
				</li>
			</ul>
		</div>
	);
}
