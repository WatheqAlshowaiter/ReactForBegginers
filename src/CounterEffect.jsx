import React from "react";

export default function CounterEffect() {
	const [totalCLicks, setTotalCLicks] = React.useState(0);

	// render on first render only,
	// []
	React.useEffect(() => {
		console.log("render on first render only");
	}, []);

	// render on each render
	// no []
	React.useEffect(() => {
		console.log("render on each render");
	});

	// render on each render for exact state
	// [state_you_want_to_observe]
	React.useEffect(() => {
		console.log("render on each render for exact state");
	}, [totalCLicks]);

	// render after component removed from the DOM, like componentWillUnmount()
	// it triggered after the callback function in the return
	// it doesn't care whether you write the state you want to observe or not in the []
	// you can combine it with other useEffect, and this functions when unmount
	React.useEffect(() => {
		return () => console.log("render after component removed from the DOM");
	});

	const increaseCLicks = () => {
		setTotalCLicks(totalCLicks + 1);
	};

	return (
		<div>
			<h1>Total Clicks: {totalCLicks}</h1>
			<button onClick={increaseCLicks}>Increase CLicks</button>
		</div>
	);
}
