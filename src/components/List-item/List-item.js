import React from "react";

import "./list-item.css";

const ListItem = ({ todo, onImportant, onDone, onDelete }) => {
	let style = "w-75 align-self-center font-weight-bold";

	if (todo.important) {
		style += " important";
	}

	if (todo.isDone) {
		style += " done";
	}

	return (
		<div className="d-flex justify-content-arround">
			<span className={style}>{todo.title}</span>
			<button className="ml-1 btn btn-dark" onClick={onImportant}>
				Важное
			</button>
			<button className="ml-1 btn btn-dark" onClick={onDone}>
				Выполнено
			</button>
			<button className="ml-1 btn btn-dark" onClick={onDelete}>
				Удалить
			</button>
		</div>
	);
};

export default ListItem;
