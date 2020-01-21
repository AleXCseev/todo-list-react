import React, { Component } from "react";

import ListItem from "../List-item/List-item";

export default class TodoList extends Component {
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
	render() {
		return (
			<div className="mt-4 col-12">
				<form className="m-2 d-flex">
					<input className="mr-1 form-control"></input>
					<button className="btn btn-light">Добавить</button>
				</form>
				<div>
					<ul className="list-group">{this.renderItems()}</ul>
				</div>
			</div>
		);
	}
}
