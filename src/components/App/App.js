import React, { Component } from "react";

import Header from "../Header/Header";
import TodoControl from "../Todo-control/Todo-control";

export default class App extends Component {
	
	render() {
		return (
			<div className="App container">
				<div className="d-flex flex-column justify-content-center align-items-center mt-5">
					<Header></Header>
					<TodoControl></TodoControl>
				</div>
			</div>
		);
	}
}
