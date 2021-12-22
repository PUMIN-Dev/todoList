import { useContext } from "react/cjs/react.development";
import { ToDoListContext } from "../contexts/ToDoListContext";

import ToDoItem from "./ToDoItem";

function ToDoList() {
	const { toDoList, setToDoList } = useContext(ToDoListContext);

	return (
		<div className="shadow">
			<ul className="list-group rounded-0">
				{toDoList.map(item => (
					<ToDoItem key={item.id} todo={item} />
				))}
			</ul>
		</div>
	);
}

export default ToDoList;