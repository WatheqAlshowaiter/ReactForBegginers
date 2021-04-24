import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterRef from "./CounterRef";
function App() {
	const [toggleCounter, setToggleCounter] = React.useState(true);

	return <>{toggleCounter && <CounterRef />}</>;
}

export default App;
