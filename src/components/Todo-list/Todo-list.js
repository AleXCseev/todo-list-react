import React, { Component } from "react";
import ListItem from "../List-item/List-item";
import { connect } from "react-redux";
import { important, done, del } from "../../actions";

class TodoList extends Component {
	state = {
		todo: this.props,
	};

	render() {
		const { todos, onImportant, onDelete, onDone } = this.props;
		return (
			<ul className="list-group">
				{todos.map((item) => {
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
				})}
			</ul>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state.todos,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onImportant: (id) => dispatch(important(id)),
		onDone: (id) => dispatch(done(id)),
		onDelete: (id) => dispatch(del(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
