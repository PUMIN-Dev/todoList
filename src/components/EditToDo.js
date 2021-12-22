import { useState } from "react";
import { Component } from "react"
// import ToDoItem from "./ToDoItem";

// function EditToDo({ closeEditForm, toDoItem: { id, title }, updateToDo }) {
// 	const [input, setInput] = useState(title);
// 	const [error, setError] = useState("");
// 	// const handleChange = (e) => {
// 	// 	setInput(e.target.value);
// 	// 	console.log(props.toDoItem.title);
// 	// 	console.log(e.target.value);
// 	// 	props.EditToDo(props.toDoItem.id, input);
// 	// };
// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		if (input === "") {
// 			return setError("Title is required.");
// 		}
// 		updateToDo(id, { title: input });
// 		closeEditForm();
// 	};
// 	return (
// 		<form className="flex-grow-1" onSubmit={handleSubmit}>
// 			<div className="input-group">
// 				<input
// 					type="text"
// 					className={`form-control rounded-0 ${error ? "is-valid" : ""}`}
// 					value={input}
// 					onChange={(e) => setInput(e.target.value)}
// 				></input>
// 				<button className="btn btn-primary rounded-0" type="submit">
// 					<i className="far fa-edit"></i>
// 				</button>
// 				<button
// 					className="btn btn-danger rounded-0"
// 					type="button"
// 					onClick={closeEditForm}
// 				>
// 					<i className="fas fa-times"></i>
// 				</button>
// 				{error && <div className="invalid-feedback">{error}</div>}
// 			</div>
// 		</form>
// 	);
// }

class EditToDo extends Component {
	render() {
		return (
			<form className="flex-grow-1">
				<div  className="input-group">
					<input />
					<button className="btn btn-primary rounded-0" type="submit" > <i className="far fa-edit"></i> </button>
					<button className="btn btn-danger rounded-0" type="button" > <i className="fas fa-times"></i> </button>
				</div>
			</form>
		)
	}
}

export default EditToDo;
