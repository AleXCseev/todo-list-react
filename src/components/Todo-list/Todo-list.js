import React, { Component } from "react";

import ListItem from "../List-item/List-item";

export default class TodoList extends Component {
	state = {
		label: "",
	};

	renderItems = () => {
		const { todos, onImportant, onDone, onDelete } = this.props;
		const list = todos.map((item) => {
			const { id, ...itemProps } = item;

			return (
				<li className="list-group-item" key={id}>
					<ListItem
						todo={itemProps}
						onImportant={() => onImportant(id)}
						onDone={() => onDone(id)}
						onDelete={() => onDelete(id)}
					></ListItem>
				</li>
			);
		});
		return list;
	};

	onLabelChange = (e) => {
		this.setState({
			label: e.target.value,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onItemAdded(this.state.label);
		this.setState({
			label: "",
		});
	};

	render() {
		return (
			<div className="mt-4 col-12">
				<form className="m-2 d-flex" onSubmit={this.onSubmit}>
					<input
						className="mr-1 form-control"
						onChange={this.onLabelChange}
						value={this.state.label}
					></input>
					<button className="btn btn-light">Добавить</button>
				</form>
				<div>
					<ul className="list-group">{this.renderItems()}</ul>
				</div>
			</div>
		);
	}
}
