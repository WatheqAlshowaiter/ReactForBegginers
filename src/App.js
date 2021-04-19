import logo from "./logo.svg";
import "./App.css";
import ListItems from "./smallerComponents/ListItems";
import User from "./User";

const userInfo = [<h2>Username</h2>, <h2>Age</h2>, <h2>Email</h2>];

function listUserInfo(info) {
	{
		return (
			<div>
				<h1>ID: {info.id}</h1>
				<h1>Name: {info.name}</h1>
				<h1>Email: {info.email}</h1>
			</div>
		);
	}
}

function App() {
	return (
		<>
			<User>{listUserInfo}</User>
		</>
	);
}

export default App;
