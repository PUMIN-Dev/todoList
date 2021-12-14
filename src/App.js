import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddToDo from "./components/AddToDo.js";
import SearchBar from "./components/SearchBar";
import RemainingMessage from "./components/RemainingMessage";
import ToDoList from "./components/ToDoList";
// import EditToDo from "./components/EditToDo.js";

const initialToDoList = [
	{ id: uuidv4(), title: "Watching a movie", completed: false },
	{ id: uuidv4(), title: "Meeting a Doc", completed: false },
	{ id: uuidv4(), title: "Dinner with Boss", completed: true },
];

function App(props) {
	// STATE DECLARATION

	const [toDoList, setToDoList] = useState(initialToDoList);
	const [searchText, setSearchText] = useState("");
	const [searchStatus, setSearchStatus] = useState("");
	// FUNCTION DECLARATION

	const createToDo = (title) => {
		const nextToDo = [
			{ id: uuidv4(), title: title, completed: false },
			...toDoList,
		];
		setToDoList(nextToDo);
	};

	const deleteToDo = (id) => {
		const idx = toDoList.findIndex((item) => item.id === id);
		const newToDoList = [...toDoList];
		if (idx !== -1) {
			newToDoList.splice(idx, 1);
		}
		setToDoList(newToDoList);
	};

	const updateToDo = (id, { id: objId, ...value }) => {
		const idx = toDoList.findIndex((item) => item.id === id);
		const newToDoList = [...toDoList];
		if (idx !== -1) {
			newToDoList[idx] = { ...newToDoList[idx], ...value };
		}
		setToDoList(newToDoList);
	};

	const pendingToDoList = toDoList.filter((item) => !item.completed);

	const filteredToDoList = toDoList.filter(
		(item) =>
			item.title.toLowerCase().includes(searchText.toLowerCase()) &&
			(searchStatus === "" || item.completed === searchStatus)
	);

	//////Edit////
	const editToDo = (id, value) => {
		const idx = toDoList.findIndex((item) => item.id === id);
		const newToDoList = [...toDoList];
		if (idx !== -1) {
			newToDoList[idx] = { ...newToDoList[idx], ...value };
		}
		setToDoList(newToDoList);
	};
	/////Edit/////
	return (
		<div className="container">
			<div className="mt-5 mx-auto mw-xs">
				<AddToDo createToDo={createToDo} />
				<SearchBar
					searchStatus={searchStatus}
					setSearchStatus={setSearchStatus}
					searchText={searchText}
					setSearchText={setSearchText}
				/>
				<RemainingMessage
					remaining={pendingToDoList.length}
					total={toDoList.length}
				/>
				<ToDoList
					toDoList={filteredToDoList}
					setToDoList={setToDoList}
					deleteToDo={deleteToDo}
					updateToDo={updateToDo}
					editToDo={editToDo}
				/>
			</div>
		</div>
	);
}

export default App;
