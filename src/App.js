import React from "react";
import "./App.css";
import Card, { CardWithBorder } from "./HOC/Card";
import Paragraph, { BorderedParagraph } from "./HOC/Paragraph";
import Pure from "./Pure";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./routers/About";
import Login from "./routers/Login";
import Home from "./routers/Home";
import Post from "./routers/Post";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/about" component={About} />
					<Route path="/login" component={Login} />
					<Route path="/post/:postId" component={Post} />
					<Route path="/" component={Home} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
