import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PostCard from "./PostCard";
import Card from "./Card";

function App() {
	return (
		<>
			<PostCard title="post title" body="post body" controls="post controls" />
		</>
	);
}

export default App;
