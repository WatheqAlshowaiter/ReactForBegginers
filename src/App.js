import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";

// const color = "crismon";
const data = {
	color: "reddd",
	size: "very bigg",
};

function App() {
	return (
		<Counter {...data} colored number={456456}>
			this is just a text for the counter
		</Counter>
	);
}

export default App;
