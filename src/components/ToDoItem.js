
// import EditToDo from "./EditToDo";

import { useState } from "react";

// function ToDoItem(props) {
// 	const [editMode, setEditMode] = useState(false);

// 	const handleClickDelete = () => {
// 		props.deleteToDo(props.toDoItem.id);
// 	};

// 	const handleClickToggle = () => {
// 		props.updateToDo(props.toDoItem.id, {
// 			completed: !props.toDoItem.completed,
// 		});
// 	};

// 	const handleEdit = () => {
// 		setEditMode(true);
// 	};

// 	return (
// 		<li
// 			className={`list-group-item d-flex justify-content-between aligh-items-center py-3 bd-callout bd-callout-${
// 				props.toDoItem.completed ? "success" : "warning"
// 			}`}
// 		>
// 			{editMode ? (
// 				<EditToDo
// 					closeEditForm={() => setEditMode(false)}
// 					toDoItem={props.toDoItem}
// 					setToDoList={props.setToDoList}
// 					editToDo={props.editToDo}
// 					updateToDo={props.updateToDo}
// 				/>
// 			) : (
// 				<>
// 					<span onClick={handleEdit}>{props.toDoItem.title}</span>
// 					<div className="btn-group">
// 						<button
// 							className="btn btn-info -btn-info rounded-0"
// 								
// 						>
// 							<i
// 								className={`fas fa-toggle-${
// 									props.toDoItem.completed ? "on" : "off"
// 								}`}
// 							></i>
// 						</button>
// 						<button
// 							className="btn btn-danger -btn-info rounded-0"
// 							onClick={handleClickDelete}
// 						>
// 							<i className="fas fa-trash-alt"></i>
// 						</button>
// 					</div>
// 				</>
// 			)}

// 			{/* {props.ToDoList.map(el => 
// 				<div>{props.ToDoList.title}</div>
// 				)} */}
// 			{/* <span>Task 1</span>
// 			<div className="btn-group">
// 				<button className="btn btn-group -btn-info rounded-0">
// 					<i className="fas fa-toggle-on"></i>
// 				</button>
// 				<button className="btn btn-danger -btn-info rounded-0">
// 					<i className="fas fa-trash-alt"></i>
// 				</button>
// 			</div> */}
// 		</li>
// 	);
// }

function ToDoItem(props) {

	const [completed, setCompleted] = useState(!props.completed)

	const handledDelete = () => {
	
		{props.deleteList(props.id)}
	}

	const handledChangeCompleted = () => {
	
		setCompleted(!completed)
		props.changeCompleted(props.id, completed)
	}
	// console.log(props.changeCompleted)

	return (
		<li className={`list-group-item d-flex justify-content-between aligh-items-center py-3 bd-callout bd-callout-${props.completed? "success":"warning"}`}>
			
				{/* <EditToDo/> */}
				<span >{props.title}</span>

				<div className="btn-group">
						<button className="btn btn-info -btn-info rounded-0" onClick={handledChangeCompleted}> <i className={`fas fa-toggle-${props.completed? 'on':'off'}`}></i> </button>
						<button className="btn btn-danger -btn-info rounded-0" onClick={handledDelete}> <i className="fas fa-trash-alt"></i> </button>
						
					</div>
				
		</li>
	);
}

export default ToDoItem;
