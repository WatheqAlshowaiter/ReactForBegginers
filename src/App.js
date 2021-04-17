import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";

function App() {
	return (
		<>
			<Card cardHeading="this is card 1" displayText={false} />
			<Card cardHeading="this is card 2" displayText />
		</>
	);
}

export default App;
