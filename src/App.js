import { useReducer, useState } from 'react';
import './App.css';

const initialCount = 0

const countReducer = (state, action) => {
	switch (action.type) {
		case "INCREMECT":
			return state+1
		case "DECREMENT":
			return state? state-1 : state
		case "RESET":
			return initialCount
			default :
			return state
	}

}

function App() {
	const [count, dispatch] = useReducer(countReducer, initialCount)
	return (
		<div className="App" >
			<h1 >{count}</h1>
			<button onClick={() => dispatch({ type: "INCREMECT" })} >+</button>
			<button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
			<button onClick={() => dispatch({ type: "RESET" })}>Reset</button>

		</div>
	)
}

export default App