import React from "react";

export default function withBorder(Component, color) {
	return function Border(props) {
		return (
			<div className="border" style={{ borderColor: color }}>
				<Component {...props} />
			</div>
		);
	};
}
