import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";

function App() {
	const [number, updateNumber] = React.useState(18);

	setTimeout(() => {
		updateNumber(30);
	}, 3000);
	return (
		<>
			<Counter number={number} />
		</>
	);
}

export default App;
