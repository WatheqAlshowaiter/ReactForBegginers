import React from "react";

const initialState = { totalClicks: 0 };
function reducer(state, action) {
	if (action === "increment") {
		return {
			totalClicks: state.totalClicks + 1,
		};
	} else if (action === "decrement") {
		return {
			totalClicks: state.totalClicks - 1,
		};
	}
	return state;
}

export default function Counter(props) {
	const [state, dispatch] = React.useReducer(reducer, initialState);

	return (
		<div>
			<h1>Totol Clicks: {state.totalClicks}</h1>
			<button onClick={() => dispatch("increment")}>Increase clicks</button>
			<button onClick={() => dispatch("decrement")}>Decrease clicks</button>
		</div>
	);
}
