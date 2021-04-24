import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterEffect from "./CounterEffect";
function App() {
	const [toggleCounter, setToggleCounter] = React.useState(true);

	setTimeout(() => {
			setToggleCounter(false)
	}, 3000);

	return <>{toggleCounter && <CounterEffect />}</>;
}

export default App;
