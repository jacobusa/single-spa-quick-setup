import React from "react";
import "./root.component.css";

export default function Root(props) {
	return (
		<div className="container1">
			<p>{props.name} is mounted!</p>
		</div>
	);
}