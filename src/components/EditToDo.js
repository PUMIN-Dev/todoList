import { useState } from "react";
import { useContext } from "react/cjs/react.development";
import { ToDoListContext } from "../contexts/ToDoListContext";

function EditToDo({ cancelEdit ,title:oldTitle, id }) {
	const [title, setTitle] = useState(oldTitle)
	const { updateToDo } = useContext(ToDoListContext)

	const handleSubmitForm = e => {
		e.preventDefault();
		updateToDo(id, { title : title })
		cancelEdit()
	}

	return (
		<form className="flex-grow-1" onSubmit={handleSubmitForm}>
			<div className="input-group">
				<input type="text" className={`form-control rounded-0 `} value={title} onChange={e => setTitle(e.target.value)} />
				<button className="btn btn-primary rounded-0" type="submit">
					<i className="far fa-edit"></i>
				</button>
				<button className="btn btn-danger rounded-0" type="button"  onClick={() => cancelEdit()}>
					<i className="fas fa-times"></i>
				</button>
			</div>
		</form>
	);
}
export default EditToDo;
