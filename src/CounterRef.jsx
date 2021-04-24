import React from "react";

export default function CounterRef() {
	const [totalCLicks, setTotalCLicks] = React.useState(0);

	// creat Ref, (the old way)
	const createdRef = React.createRef(); // you can NOT add an initial value

	if (!createdRef.current) {
		createdRef.current = totalCLicks; // it will update every time the state changes
	}

	// useRef, (with hoocks)
	const oneRef = React.useRef(5); // you can add an initial value
	if (!oneRef.current) {
		oneRef.current = totalCLicks; // it will NOT update every time the state changes
	}

	const increaseCLicks = () => {
		setTotalCLicks(totalCLicks + 1);
	};

	return (
		<div>
			<h1>Total Clicks: {totalCLicks}</h1>
			<h2>Creatd Ref: {createdRef.current}</h2>
			<h2>useRef: {oneRef.current}</h2>
			<button onClick={increaseCLicks}>Increase CLicks</button>
		</div>
	);
}
