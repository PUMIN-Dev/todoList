import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { ToDoListContext } from "../contexts/ToDoListContext";

function AddToDo() {
	const { addToDo } = useContext(ToDoListContext);
	const [title, setTitle] = useState("");

	const handleSubmitForm = async e => {
		e.preventDefault();
		addToDo({ title, completed: false });
	};

	return (
		<div>
			<form onSubmit={handleSubmitForm}>
				<div className="input-group">
					<input
						type="text"
						value={title}
						onChange={e => setTitle(e.target.value)}
						className={`form-control round-0 `}
					/>
					<button className="btn btn-success round-0">
						<i className="fas fa-plus"></i>
					</button>
				</div>
			</form>
		</div>
	);
}
export default AddToDo;