import React from "react";
import "./item-inpute.css";

const ENTER_KEY = 13;
const ESCAPE_KEY = 27;

export default function ItemInput(props) {
	let { onFinish, onClose, open, ...otherInputProps } = props;
	if (open === false) return "";
	const captureInputValue = (e) => {
		let input = e.target,
			value = input.value,
			pressedButtonCode = e.keyCode || e.charCode;

		if (pressedButtonCode === ENTER_KEY) {
			if (value === "") return;
			e.target.value = "";
			onFinish(value);
			value = "";
		} else if (pressedButtonCode === ESCAPE_KEY) {
			onClose();
		}
	};
	return (
		<div className="item-input-wrapper">
			<input
				onKeyDown={captureInputValue}
				type="text"
				className="item-input"
				{...otherInputProps}
				autoFocus
			/>
		</div>
	);
}
