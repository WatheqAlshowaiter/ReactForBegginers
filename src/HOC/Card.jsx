import React from "react";
import "./card-styles.css";
import withBorder from "./withBorder";

export default function Card(props) {
	return <div>{props.children}</div>;
}

export const CardWithBorder = withBorder(Card, 'green');
