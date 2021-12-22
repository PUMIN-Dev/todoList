import { Component, useState } from "react";
import EditToDo from "./EditToDo";

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
// 			className={`list-group-item d-flex justify-content-between aligh-items-center py-3 bd-callout bd-callout-${props.toDoItem.completed ? "success" : "warning"
// 				}`}
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
// 							onClick={handleClickToggle}
// 						>
// 							<i
// 								className={`fas fa-toggle-${props.toDoItem.completed ? "on" : "off"
// 									}`}
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

// 		</li>
// 	);
// }

class ToDoItem extends Component {
	render() {
  console.log(this.props.completed)
		return (
			<li className={`list-group-item d-flex justify-content-between aligh-items-center py-3 bd-callout 
			bd-callout-${this.props.completed ? "success":"warning"}`}>
				{/* <EditToDo/> */}
				<span >{this.props.title}</span>
				<div className="btn-group">
					<button className="btn btn-info -btn-info rounded-0"> <i className="fas fa-toggle-on"></i> </button>
									
							
					<button className="btn btn-danger -btn-info rounded-0"> <i className="fas fa-trash-alt"></i> </button>

				</div>
			</li>
		)
	}
}

export default ToDoItem;
