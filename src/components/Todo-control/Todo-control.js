import React, { Component } from "react";
import { connect } from "react-redux";
import TodoList from "../Todo-list/Todo-list";
import { add } from "../../actions";

//

class TodoControl extends Component {
	state = {
		label: "",
	};

	onSubmit = (e) => {
		e.preventDefault();
		const addTodo = {
			id: Date.now().toString(),
			title: this.state.label,
			important: false,
			isDone: false,
		};
		if (this.state.label) {
			this.props.addTodoItem(addTodo);
		}

		this.setState({
			label: "",
		});
	};

	onLabelChange = (e) => {
		this.setState({
			label: e.target.value,
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
					<TodoList></TodoList>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addTodoItem: (item) => dispatch(add(item)),
	};
};

export default connect(null, mapDispatchToProps)(TodoControl);
