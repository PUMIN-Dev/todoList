
import { v4 as uuidv4 } from "uuid";
import AddToDo from "./components/AddToDo";
import SearchBar from "./components/SearchBar"
import RemainingMessage from "./components/RemainingMessage";
import ToDoList from "./components/ToDoList";
import { useState } from "react"

// import EditToDo from "./components/EditToDo.js";


// const initialToDoList = [
// 	{ id: uuidv4(), title: "Watching a movie", completed: false },
// 	{ id: uuidv4(), title: "Meeting a Doc", completed: false },
// 	{ id: uuidv4(), title: "Dinner with Boss", completed: true },
// ];



// function App(props) {
// 	// STATE DECLARATION

// 	const [toDoList, setToDoList] = useState([]);
// 	const [searchText, setSearchText] = useState("");
	// const [searchStatus, setSearchStatus] = useState("");
// 	// FUNCTION DECLARATION

// 	useEffect(() => {
// 		axios.get('http://localhost:8080/todos').then(res => {
// 			console.log(res.data)
// 			setToDoList(res.data.todos)
// 		})
// 	}, [])

// 	const createToDo = title => {
// 		axios
// 			.post("http://localhost:8080/todos", {
// 				title: title,
// 				completed: false,
// 			})
// 			.then(res => {
// 				console.log(res.data);
// 				const nextToDo = [res.data.todo, ...toDoList];
// 				setToDoList(nextToDo);
// 			});
// 	};

// 	// const deleteToDo = (id) => {
// 	// 	const idx = toDoList.findIndex((item) => item.id === id);
// 	// 	const newToDoList = [...toDoList];
// 	// 	if (idx !== -1) {
// 	// 		newToDoList.splice(idx, 1);
// 	// 	}
// 	// 	setToDoList(newToDoList);
// 	// };

// 	const deleteToDo = async id => {
// 		const res = await axios.delete(`http://localhost:8080/todos/${id}`)
// 		console.log(res.data)
// 		const idx = toDoList.findIndex((item) => item.id === id);
// 		const newToDoList = [...toDoList];
// 		if (idx !== -1) {
// 			newToDoList.splice(idx, 1);
// 		}
// 		setToDoList(newToDoList);

// 	};

// 	// const updateToDo = (id, { id: objId, ...value }) => {
// 	// 	// console.log({ id: objId, ...value })
// 	// 	const idx = toDoList.findIndex((item) => item.id === id);
// 	// 	const newToDoList = [...toDoList];
// 	// 	if (idx !== -1) {
// 	// 		newToDoList[idx] = { ...newToDoList[idx], ...value };
// 	// 	}
// 	// 	setToDoList(newToDoList);
// 	// };
// 	const updateToDo = async (id, { id: objId, ...value }) => {
// 		const idx = toDoList.findIndex(item => item.id === id);
// 		const newToDoList = [...toDoList];
// 		if (idx !== -1) {
// 		 newToDoList[idx] = { ...newToDoList[idx], ...value };
// 		 axios.put(`http://localhost:8080/todos/${id}`, newToDoList[idx]);
// 		}
// 		setToDoList(newToDoList);
// 	   };


// 		const pendingToDoList = toDoList.filter((item) => !item.completed);

		// const filteredToDoList = toDoList.filter(
		// 	(item) =>
		// 		item.title.toLowerCase().includes(searchText.toLowerCase()) &&
		// 		(searchStatus === "" || item.completed === searchStatus)
		// );

// 		//////Edit////
// 		const editToDo = (id, value) => {
// 			const idx = toDoList.findIndex((item) => item.id === id);
// 			const newToDoList = [...toDoList];
// 			if (idx !== -1) {
// 				newToDoList[idx] = { ...newToDoList[idx], ...value };
// 			}
// 			setToDoList(newToDoList);
// 		};
// 		/////Edit/////
// 		return (
// 			<div className="container">
// 				<div className="mt-5 mx-auto mw-xs">
// 					<AddToDo createToDo={createToDo} />
// 					<SearchBar
						// searchStatus={searchStatus}
						// setSearchStatus={setSearchStatus}	
// 						searchText={searchText}
// 						setSearchText={setSearchText}
// 					/>
// 					<RemainingMessage
// 						remaining={pendingToDoList.length}
// 						total={toDoList.length}
// 					/>
// 					<ToDoList
// 						toDoList={filteredToDoList}
// 						setToDoList={setToDoList}
// 						deleteToDo={deleteToDo}
// 						updateToDo={updateToDo}
// 						editToDo={editToDo}
// 					/>
// 				</div>
// 			</div>
// 		);
// 	}

const initialToDoList = [
	{ id: uuidv4(), title: "Watching a movie", completed: false },
	{ id: uuidv4(), title: "Meeting a Doc", completed: false },
	{ id: uuidv4(), title: "Dinner with Boss", completed: true },
];



function App() {

	const [addTodo, setAddTodo] = useState(initialToDoList)
	const [searchTerm, setSearchTerm] = useState({text : '',status:''})
	const [searchStatus, setSearchStatus] = useState("")


	const addNewList = (title) => {
		const clone = [...addTodo]
		const list = [{ id: uuidv4(), title: title, completed: false }, ...clone]
		setAddTodo(list)
	}

	const deleteList = (id) => {
		const idx = addTodo.findIndex((el) => el.id === id)
		const newList = [...addTodo]
		newList.splice(idx, 1)
		setAddTodo(newList)
	}

	const changeCompleted = (id, completed) => {
		// console.log(completed)
		const a = { ...completed }
		const idx = addTodo.findIndex((el) => el.id === id)
		const newList = [...addTodo]
		newList[idx] = { ...newList[idx], completed: completed }
		// console.log(newList[idx])
		setAddTodo(newList)
	}

	
		const showTodo = addTodo.filter(el =>
		 el.title.toLocaleLowerCase().includes(searchTerm.text.toLocaleLowerCase()) && (searchStatus === '' || el.completed === searchStatus ) )  
		 	
		

	
	// const clickStatusFilter = (status) => {
	// 	const newShow = [...addTodo]
	// 	if (status === 'all') {
	// 		setAddTodo(newShow)
	// 	} 
	// 	if (status === 'done') {
	// 		newShow = newShow.
	// 		setAddTodo(newShow)
	// 	} 
	// }


	return (
		<div className="container">
			<div className="mt-5 mx-auto mw-xs">
				<AddToDo addNewList={addNewList} />
				<SearchBar setSearchTerm = {setSearchTerm} searchTerm ={searchTerm} searchStatus={searchStatus} setSearchStatus={setSearchStatus}/>
				<RemainingMessage addTodo={addTodo} />
				<ToDoList addTodo={showTodo} deleteList={deleteList} changeCompleted={changeCompleted} />
			</div>
		</div>
	);
}

export default App;
