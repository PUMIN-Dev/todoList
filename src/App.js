import { useReducer, useState, Component } from 'react';
import './App.css';
import Counter from './Counter';


// class Person {
// 	firstName;

// 	constructor(firstName, lastName){
// 		console.log(firstName)
// 		console.log(lastName)
// 		this.firstName = firstName
// 		this.lastName = lastName
// 	}

// 	sayHi(){
// 		console.log('Hi')
// 	}

// 	getFullname(){
// 		this.sayHi()
// 		return this.firstName
// 	}
// }

// // const a = new Person('John', 'Doe')

// // const a = new Person()
// // a.sayHi()
// // a.firstName = "john"
// // console.log(a.getFullname())

// class Engineer extends Person {
//  getFullname(){
// 	 console.log(this.firstName + " "+ this.lastName)
//  }
// }

// const engi = new Engineer('Roland','McAllistor')

// class Politician{

// }

// function App() {
// return (
// 	<>
// 	</>
// )

// }

class App extends Component {

	// state = {
	// 	count: 0,
	// 	test: "Test State",
	// 	isShow: true
	// }

	constructor(prop){
	console.log("1")
		super(prop)
		this.state = {
			count : 0,
			isShow: true
		}
		this.handleClickDecreMent = this.handleClickDecreMent.bind(this)

	}
	componentDidMount(){
		console.log('App componentDidMount run')
	}

	componentDidUpdate(){
		console.log('App componentDidUpdate run')
	}

	// handleClickDecreMent(){
	// 	console.log(this)
	// 	this.setState({count:this.state.count-1})
	// }

	handleClickDecreMent = () => {
		this.setState({ count: this.state.count - 1 })
	}

	render() {
		console.log("2")
		const { count } = this.state
		// console.log(this.state)
		return <div className='App'>
			<h1>Counter App</h1>
			<div>
				<button onClick={() => this.setState({isShow: !this.state.isShow})}>Toggle</button>
			</div>

			{this.state.isShow ? <><Counter count={count} title="Counter App" />
				<button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
				<button onClick={this.handleClickDecreMent}>-</button>
				<button onClick={() => this.setState({ count: count - count })}>Reset</button></> : null}
		</div>
	}

}

export default App



