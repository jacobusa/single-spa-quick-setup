import React from "react";
import "./styles.css";
import Heroo from "../pages/Heroo";

export default function Root(props) {
	return (
		<div className="container1">
			<p>{props.name} is mounted!</p>
			<Heroo />
		</div>
	);
}
