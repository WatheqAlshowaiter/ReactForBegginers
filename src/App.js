import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PostCard from "./PostCard";
import UserContext from "./UserContext";

const user = {
	name: "Hasan Ali",
};
function App() {
	return (
		<>
			<UserContext.Provider value={user}>
				<PostCard/>
			</UserContext.Provider>
		</>
	);
}

export default App;
