

// function AddToDo(props) {
// 	const [title, setTitle] = useState("");
// 	const [error, setError] = useState("");
// 	const handleChange = (e) => {
// 		setTitle(e.target.value);
// 	};
// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		if (title.trim() === "") {
// 			return setError("Title is required.");
// 		}
// 		props.createToDo(title);
// 		setError("");
// 		setTitle("");
// 	};
// 	return (
// 		<div>
// 			<form onSubmit={handleSubmit}>
// 				<div className="input-group">
// 					<input
// 						type="text"
// 						className={`form-control round-0 ${error && "is-invalid"}`}
// 						value={title}
// 						onChange={handleChange}
// 					/>
// 					<button className="btn btn-success round-0">
// 						<i className="fas fa-plus"></i>
// 					</button>
// 					{error && <div className="invalid-feedback">{error}</div>}
// 				</div>
// 			</form>
// 		</div>
// 	);
// }

import { useState } from "react";

function AddToDo(props){

	const [title, setTitle] = useState("")
	const [error, setError] = useState("")

    //  console.log(Boolean( error))
	 

	const handeledAdd = (e) => {
		e.preventDefault()
		if(title !== ""){
			{props.addNewList(title)}
			setError("")
		} else {
			setError("ERROR!!")
		}
		setTitle("")
	}

	// console.log(props.addNewList(title))
	return(
		<div>
			<form onSubmit={handeledAdd}>
				<div className="input-group">
					<input type="text" className={`form-control rounded-0 is-${error && 'invalid'}`} onChange={(el) => setTitle(el.target.value)} value={title} />
					<button className="btn btn-success round-0"   > <i className="fas fa-plus"></i> </button>
					<div className="invalid-feedback">error</div>

				</div>
			</form>
		</div>
	)
}

export default AddToDo;
