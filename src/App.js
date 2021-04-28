import React from "react";
import "./App.css";

function App() {
	// const [inputValue, setInputValue] = React.useState("initial value"); // using states (controlled component)
	// const inputRef = React.createRef();
	const [disabled, disapleInput] = React.useState(false);
	const changeOtherImput = (e) => {
		// inputRef.current.value = e.target.value;
		disapleInput(e.target.value === "welcome");
	};

	return (
		<>
			<input type="text" onChange={changeOtherImput} />
			<input type="text" disabled={disabled} />
		</>
	);
}

export default App;
