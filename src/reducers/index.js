const initialState = {
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

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TODO":
			const dublicate = state.todos.find(
				(item) => item.title.toLowerCase() === action.payload.title.toLowerCase(),
			);
			if (dublicate) {
				return state;
			}
			const addTodo = [...state.todos, action.payload];
			return {
				todos: addTodo,
			};

		case "DELETE_TODO":
			const findEl = state.todos.findIndex((item) => item.id === action.payload);
			const delTodo = [...state.todos.slice(0, findEl), ...state.todos.slice(findEl + 1)];
			return {
				todos: delTodo,
			};
		case "IMPORTANT_TODO":
			const newState = state.todos.map((item) => {
				if (item.id === action.payload) {
					item.important = !item.important;
				}
				return item;
			});
			return {
				todos: newState,
			};
		case "DONE_TODO":
			const doneTodo = state.todos.map((item) => {
				if (item.id === action.payload) {
					item.isDone = !item.isDone;
				}
				return item;
			});
			return {
				todos: doneTodo,
			};
		default:
			return state;
	}
};

export default reducer;
