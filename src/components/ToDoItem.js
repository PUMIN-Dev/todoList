import { useContext } from "react";
import { useState } from "react/cjs/react.development";
import { ToDoListContext } from "../contexts/ToDoListContext";
import EditToDo from "./EditToDo";

function ToDoItem({ todo: { title, completed, id } }) {
	const [isEdit, setIsEdit] = useState(false)
	const { updateToDo, deleteToDo } = useContext(ToDoListContext);
	const handleDelete = e => {
		deleteToDo(id);
	};
	return (
		<li
			className={`list-group-item d-flex justify-content-between align-items-center py-3 bd-callout bd-callout-${
				completed ? "success" : "warning"
			}`}>
			 {isEdit ? <EditToDo cancelEdit={() => setIsEdit(false) } title ={title}  id ={id}/> : 
			<>
				<span onClick={() => setIsEdit(true)} > {title}</span>
				<div className="btn-group">
					<button
						className="btn btn-info -btn-info rounded-0"
						onClick={() => updateToDo(id, { completed: !completed })}>
						<i className={`fas fa-toggle-on`}></i>
					</button>
					<button
						className="btn btn-danger -btn-info rounded-0"
						onClick={handleDelete}>
						<i className="fas fa-trash-alt"></i>
					</button>
				</div>
			</>}
		</li>
	);
}

export default ToDoItem;
