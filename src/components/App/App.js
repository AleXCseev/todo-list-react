import React, { Component } from "react";

import Header from "../Header/Header";
import TodoList from "../Todo-list/Todo-list";

export default class App extends Component {
	state = {
		todos: [
			{
				id: "1",
				title: "Learn React",
				important: false,
				isDone: false,
			},
			{
				id: "2",
				title: "Learn Redux",
				important: false,
				isDone: false,
			},
			{
				id: "3",
				title: "Learn React-router",
				important: false,
				isDone: false,
			},
		],
	};

	onImportant = (id) => {
		const { todos } = this.state;
		const newState = todos.map((item) => {
			if (item.id === id) {
				item.important = !item.important;
			}
			return item;
		});

		this.setState({
			newState,
		});
	};

	onDone = (id) => {
		const { todos } = this.state;
		const newState = todos.map((item) => {
			if (item.id === id) {
				item.isDone = !item.isDone;
			}
			return item;
		});

		this.setState({
			newState,
		});
	};

	onDelete = (id) => {
		const { todos } = this.state;
		const findEl = todos.findIndex((item) => item.id === id);
		const newState = [...todos.slice(0, findEl), ...todos.slice(findEl + 1)];

		this.setState({
			todos: newState,
		});
	};

	onItemAdded = (item) => {
		const { todos } = this.state;
		const newItem = {
			id: Date.now().toString(),
			title: item,
			important: false,
			isDone: false,
		};
		const newState = [...todos, newItem];
		const findEl = todos.findIndex((el) => el.title.toLowerCase() === item.toLowerCase());
		if (findEl === -1) {
			this.setState({
				todos: newState,
			});
		} else {
			console.log("дубликат задачи");
		}
	};

	render() {
		const { todos } = this.state;
		return (
			<div className="App container">
				<div className="d-flex flex-column justify-content-center align-items-center mt-5">
					<Header></Header>
					<TodoList
						todos={todos}
						onImportant={this.onImportant}
						onDone={this.onDone}
						onDelete={this.onDelete}
						onItemAdded={this.onItemAdded}
					></TodoList>
				</div>
			</div>
		);
	}
}
