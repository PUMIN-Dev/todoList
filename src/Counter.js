import { Component } from "react";

class Counter extends Component{

    render() {
        // console.log(this.props)
        const { count, title } = this.props
        return <h1>{count}</h1>
    }

}

export default Counter