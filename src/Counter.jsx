import React from "react";
import { useMultiplier, useOnce } from "./outHooks";

export default function Counter(props) {
	const [counter, setCounter] = React.useState(0);

	const handleChange = () => {
		setCounter(counter + 1);
	};

	useOnce(() => console.log("render once at the first render"));

	const result = useMultiplier(3);

	return (
		<div>
			<h1>Mutliplier: {result}</h1>
			<h1>Totol Clicks: {counter}</h1>
			<button onClick={handleChange}>Increase clicks</button>
		</div>
	);
}
