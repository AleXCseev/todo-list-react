import React, { Component } from "react";
import ListItem from "../List-item/List-item";
import { connect } from "react-redux";
import { important, done, del } from "../../actions";

class TodoList extends Component {
	renderTodoList = () => {
		const { onImportant, onDelete, onDone, todos } = this.props;
		if (todos) {
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
		}
	};

	render() {
		return <ul className="list-group">{this.renderTodoList()}</ul>;
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state.todos.todos
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onImportant: (id) => dispatch(important(id)),
		onDone: (id) => dispatch(done(id)),
		onDelete: (id) => dispatch(del(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
