import { Component } from "react";

// function RemainingMessage({ remaining, total }) {
// 	return (
// 		<div className="mt-4 py-3 text-center bg-dark text-white">
// 			{remaining} of {total} Remaining
// 		</div>
// 	);
// }

class RemainingMessage extends Component{
	render(){
		return(
			<div className="mt-4 py-3 text-center bg-dark text-white">
			2 of 22 Remaining
		</div>
		)
	}
}

export default RemainingMessage;
