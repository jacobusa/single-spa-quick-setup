import React from "react";
import "./root.component.css";

export default function Root(props) {
	return (
		<div className="container">
			<p>{props.name} is mounted!</p>
		</div>
	);
}
