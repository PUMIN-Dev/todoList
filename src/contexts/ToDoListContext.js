import axios from "axios";
import { createContext, useState, useEffect, useReducer } from "react";

const ToDoListContext = createContext();

//ACTION
//ADD_TODO
//TOGGLE_STATUS
//DELETE_TODO
//UPDATE_TODO
//FETCH_TODO

const initial = [];

const toDoReducer = (state, action) => {
	//action { type: 'ADD_TODO', payLoad:{"Homwork", id:"aaacasasa", completed: false}  }

	// 	if (action.type === "ADD_TODO"){
	// 		//return nextState
	// 	} else if (action.type === "TOGGLE_STATUS"){
	// 		//return nextStatus
	// 	} else if(action.type === "DELETE_TODO"){
	// 		//return nextState
	// 	} else if (action.type === "UPDATE_TODO"){

	// 	} else if (action.type === "FETCH_TODO"){

	// 	}else{

	// 	}
	// }
	console.log('Reducer run')
	switch (action.type) {
		case 'ADD_TODO':
			return [action.payload.toDos,...state]
		case "TOGGLE_STATUS":

		case "DELETE_TODO":
		{	const idx = state.findIndex(item => item.id === action.payload.id)
			const newState = [...state]
			newState.splice(idx,1)
			return newState}
		case "UPDATE_TODO":
			{const idx = state.findIndex(item => item.id === action.payload.todo.id)
			const newState = [...state]
			newState[action.payload.idx] = action.payload.todo
			return newState}

		case "FETCH_TODO":
			return action.payload.toDos
		default : return state;
	}
}

function ToDoListContextProvider(props) {
	const [toDoList, dispatch] = useReducer(toDoReducer, initial)

	//dispatch({ type: 'FETCH_TODO', payLoad:[]})

	useEffect(() => {
		const fetchToDo = async () => {
			const res = await axios.get("http://localhost:8080/todos");
			dispatch({type:'FETCH_TODO', payload:{toDos:res.data.todos}})
		};
		fetchToDo();
	}, []);

	const addToDo = async value => {
		const res = await axios.post("http://localhost:8080/todos", value);
		dispatch({type:'ADD_TODO', payload:{toDos:res.data.todo}})
		// setToDoList(prev => [res.data.todo, ...prev]);
	};

	const updateToDo = async (id, value) => {
	
		const idx = toDoList.findIndex(item => item.id === id)
			await axios.put(`http://localhost:8080/todos/${id}`, {
				...toDoList[idx],
				...value,
			});
	
			dispatch({type:'UPDATE_TODO', payload:{todo:{...toDoList[idx],...value}, idx}
		})
		// 	setToDoList(newToDoList);
	
	};

	const deleteToDo = async id => {
		await axios.delete(`http://localhost:8080/todos/`+id);
		dispatch({type:"DELETE_TODO",payload: { id }})
	};

	return (
		<ToDoListContext.Provider
			value={{ toDoList, addToDo, updateToDo, deleteToDo }}>
			{props.children}
		</ToDoListContext.Provider>
	);
}

export default ToDoListContextProvider;
export { ToDoListContext }