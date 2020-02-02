import React, { Component } from "react";

import Header from "../Header/Header";
import TodoControl from "../Todo-control/Todo-control";
import FilterPanel from "../Filter-panel/Filter-panel";

export default class App extends Component {
	render() {
		return (
			<div className="App container">
				<div className="d-flex flex-column justify-content-center align-items-center mt-5">
					<Header></Header>
					<FilterPanel></FilterPanel>
					<TodoControl></TodoControl>
				</div>
			</div>
		);
	}
}
