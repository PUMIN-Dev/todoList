import { useState } from "react";

function AddToDo(props) {
	const [title, setTitle] = useState("");
	const [error, setError] = useState("");
	const handleChange = (e) => {
		setTitle(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (title.trim() === "") {
			return setError("Title is required.");
		}
		props.createToDo(title);
		setError("");
		setTitle("");
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="input-group">
					<input
						type="text"
						className={`form-control round-0 ${error && "is-invalid"}`}
						value={title}
						onChange={handleChange}
					/>
					<button className="btn btn-success round-0">
						<i className="fas fa-plus"></i>
					</button>
					{error && <div className="invalid-feedback">{error}</div>}
				</div>
			</form>
		</div>
	);
}
export default AddToDo;
