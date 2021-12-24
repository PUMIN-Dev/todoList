import ToDoItem from "./ToDoItem";

// function ToDoList(props) {
// 	return (
// 		<div className="shadow">
// 			<ul className="list-group rounded-0">
// 				{props.toDoList.map((item) => (
// 					<ToDoItem
// 						toDoItem={item}
// 						key={item.id}
// 						deleteToDo={props.deleteToDo}
// 						updateToDo={props.updateToDo}
// 						editToDo={props.editToDo}
// 						setToDoList={props.setToDoList}
// 					/>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }

function ToDoList(props) {
	// console.log(props.initialToDoList)
	return (
		<div className="shadow">
			<ul className="list-group rounded-0">
				{props.addTodo.map((el) => <ToDoItem key={el.id} id={el.id} title={el.title} completed={el.completed} 
				deleteList={props.deleteList} changeCompleted = {props.changeCompleted} />)}
				
			</ul>
		</div>
	);
}

export default ToDoList;
