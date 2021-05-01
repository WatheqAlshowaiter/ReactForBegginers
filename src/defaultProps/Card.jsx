import React from "react";
import "./style.css";

export default function Card(props) {
	return (
		<div className="card" style={{ backgroundColor: props.color }}>
			{props.children}
		</div>
	);
}

Card.defaultProps= {
	color: "skyblue",
};
