import React from "react";

export default function InputWatcher() {
	const [inputValue, setInputValue] = React.useState();
	const [inputValueDublicate, dublicate] = React.useState();

	const changeInputValue = (e) => {
		setInputValue(e.target.value);
		dublicate(e.target.value + e.target.value);
	};

	return (
		<div>
			<h1>Watcher: {inputValue}</h1>
			<h1>Watcher Twice: {inputValueDublicate}</h1>
			<input type="text" onChange={changeInputValue} />
		</div>
	);
}
