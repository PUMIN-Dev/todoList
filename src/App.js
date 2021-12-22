import AddToDo from "./components/AddToDo.js";
import SearchBar from "./components/SearchBar";
import RemainingMessage from "./components/RemainingMessage";
import ToDoList from "./components/ToDoList";
import ToDoListContextProvider from "../src/contexts/ToDoListContext";

function App() {
	return (
		<div className="container">
			<div className="mt-5 mx-auto mw-xs">
				<ToDoListContextProvider>
					<AddToDo />
					<SearchBar />
					<RemainingMessage />
					<ToDoList />
				</ToDoListContextProvider>
			</div>
		</div>
	);
}

export default App;