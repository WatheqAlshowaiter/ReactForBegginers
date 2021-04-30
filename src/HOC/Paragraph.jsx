import React from "react";
import "./card-styles.css";
import withBorder from "./withBorder";

export default function Paragraph(props) {
	return (
		<article>
			<p>{props.children}</p>
		</article>
	);
}

export const BorderedParagraph = withBorder(Paragraph, 'crimson')
