import React from "react";
import "./App.css";
import Card, { CardWithBorder } from "./HOC/Card";
import Paragraph, { BorderedParagraph } from "./HOC/Paragraph";

function App() {
	return (
		<>
			<Card>Original Card</Card>
			<CardWithBorder>bordered card</CardWithBorder>
			<Paragraph>this is my Paragraph </Paragraph>
			<BorderedParagraph>this is bordered Paragraph</BorderedParagraph>
		</>
	);
}

export default App;
