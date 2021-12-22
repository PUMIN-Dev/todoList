import ToDoItem from "./ToDoItem";
import { Component } from "react"

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

class ToDoList extends Component{
	
	render(props){
		// console.log(this.props.toDoList.map((el) => el.key));
		return(
			<div className="shadow">
				<ul className="list-group rounded-0">
					{this.props.toDoList.map((el) => (<ToDoItem  key={el.key} title={el.title} completed={el.completed} />
					))}
				</ul>

			</div>
		)

		
	}
}

export default ToDoList;
