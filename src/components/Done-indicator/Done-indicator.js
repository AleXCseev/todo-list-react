import React, { Component } from "react";
import { connect } from "react-redux";

class DoneIndicator extends Component {
	getCount = () => {
		let done = 0;
		let notDone = 0;
		this.props.todos.forEach((element) => {
			if (!element.isDone) {
				done += 1;
			} else {
				notDone += 1;
			}
		});
		return `${notDone} выполнено, ${done} не выполнено`;
	};

	render() {
		return (
			<div>
				<p>{this.getCount()}</p>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state.todos.todos,
	};
};

export default connect(mapStateToProps)(DoneIndicator);
