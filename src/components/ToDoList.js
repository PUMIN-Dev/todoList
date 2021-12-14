import ToDoItem from "./ToDoItem";

function ToDoList(props) {
	return (
		<div className="shadow">
			<ul className="list-group rounded-0">
				{props.toDoList.map((item) => (
					<ToDoItem
						toDoItem={item}
						key={item.id}
						deleteToDo={props.deleteToDo}
						updateToDo={props.updateToDo}
						editToDo={props.editToDo}
						setToDoList={props.setToDoList}
					/>
				))}
			</ul>
		</div>
	);
}

export default ToDoList;
