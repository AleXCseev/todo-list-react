import React from "react";
import "./list-item.css";

const ListItem = ({ todo, onImportant, onDone, onDelete }) => {
	let style = "h5 w-75 align-self-center font-weight-bold";

	if (todo.important) {
		style += " important";
	}

	if (todo.isDone) {
		style += " done";
	}

	return (
		<div className="d-flex justify-content-arround">
			<p className={style}>{todo.title}</p>
			<button className="ml-1 btn btn-outline-dark" onClick={onImportant}>
				Важное
			</button>
			<button className="ml-1 btn btn-outline-dark" onClick={onDone}>
				Выполнено
			</button>
			<button className="ml-1 btn btn-outline-dark" onClick={onDelete}>
				Удалить
			</button>
		</div>
	);
};

export default ListItem;
