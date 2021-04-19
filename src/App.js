import logo from "./logo.svg";
import "./App.css";
import ListItems from "./smallerComponents/ListItems";

function App() {
	return (
		<>
			<ListItems maxItems={10} />
		</>
	);
}

export default App;
