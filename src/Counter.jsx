import React from "react";

function factor(number) {
	const factors = [];

	let currentNumber = number;
	while (currentNumber >= 1) {
		if (Number.isInteger(number / currentNumber)) {
			factors.push(currentNumber);
		}
		currentNumber--;
	}
	console.log(factors);
	return factors.join(", ");
}

export default function Counter(props) {
	const [totalClicks, setTotalClicks] = React.useState(0);
	const numberFactors = React.useMemo(() => {
		factor(props.number);
	}, [props.number]);
	return (
		<div>
			<h1>
				Factors of {props.number} are: {numberFactors}
			</h1>
			<h1>Totol Clicks: {totalClicks}</h1>
			<button onClick={() => setTotalClicks(totalClicks + 1)}>
				Increase clicks
			</button>
		</div>
	);
}
