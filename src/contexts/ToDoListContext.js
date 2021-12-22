import axios from "axios";
import { createContext, useState, useEffect } from "react";

const ToDoListContext = createContext();

function ToDoListContextProvider(props) {
	const [toDoList, setToDoList] = useState([]);
	const [editMode, setEditMode] = useState(false);

	useEffect(() => {
		const fetchToDo = async () => {
			const res = await axios.get("http://localhost:8080/todos");
			setToDoList(res.data.todos);
		};
		fetchToDo();
	}, []);

	const addToDo = async value => {
		const res = await axios.post("http://localhost:8080/todos", value);
		setToDoList(prev => [res.data.todo, ...prev]);
	};

	const updateToDo = async (id, value) => {
		const idx = toDoList.findIndex(item => item.id === id);
		if (idx !== -1) {
			await axios.put(`http://localhost:8080/todos/${id}`, {
				...toDoList[idx],
				...value,
			});
			const newToDoList = [...toDoList];
			newToDoList[idx] = {
				...toDoList[idx],
				...value,
			};
			setToDoList(newToDoList);
		}
	};

	const deleteToDo = async id => {
		await axios.delete(`http://localhost:8080/todos/${id}`);
		const newToDo = toDoList.filter(el => el.id !== id);

		setToDoList(newToDo);
	};

	return (
		<ToDoListContext.Provider
			value={{ toDoList, setToDoList, addToDo, updateToDo, deleteToDo }}>
			{props.children}
		</ToDoListContext.Provider>
	);
}

export default ToDoListContextProvider;
export { ToDoListContext };