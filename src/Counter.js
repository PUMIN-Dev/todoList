import { Component } from "react";

class Counter extends Component{

    constructor(props){
        super(props)
        console.log('3')
    }

    componentDidMount(){
		console.log('Counter componentDidMount run')
	}
    render() {
        console.log('4')
        // console.log(this.props)
        const { count, title } = this.props
        return <h1>{count}</h1>
    }

}

export default Counter