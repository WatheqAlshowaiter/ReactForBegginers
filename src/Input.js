import React, { Component } from "react";
import "./input.css";

export default React.forwardRef((props, ref) => {
	return (
		<div className="form-group">
			<input ref={ref} />
		</div>
	);
});
