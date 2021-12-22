// function StatusFilter(props) {
// 	const handleChange = (e) => {
// 		const value = e.target.value;
// 		props.setSearchStatus(!value ? value : value === "true");
// 	};
// 	return (
// 		<div className="btn-group ms-3">
// 			<input
// 				type="radio"
// 				className="btn-check"
// 				id="all"
// 				name="status"
// 				defaultChecked
// 				onChange={handleChange}
// 				value=""
// 			/>
// 			<label className="btn btn-outline-secondary rounded-0" htmlFor="all">
// 				<i className="fas fa-tasks"></i>
// 			</label>
// 			<input
// 				type="radio"
// 				className="btn-check"
// 				id="done"
// 				name="status"
// 				value="true"
// 				onChange={handleChange}
// 			/>
// 			<label className="btn btn-outline-secondary rounded-0" htmlFor="done">
// 				<i className="fas fa-clipboard-check"></i>
// 			</label>
// 			<input
// 				type="radio"
// 				className="btn-check"
// 				id="doing"
// 				name="status"
// 				value="false"
// 				onChange={handleChange}
// 			/>
// 			<label className="btn btn-outline-secondary rounded-0" htmlFor="doing">
// 				<i className="far fa-clipboard"></i>
// 			</label>
// 		</div>
// 	);
// }

import { Component } from "react";

class StatusFilter extends Component{
	render(){
		return(
			<div className="btn-group ms-3">
				<input type="radio" className="btn-check" id="all" name="status" defaultChecked/>
				<label className="btn btn-outline-secondary rounded-0" htmlFor="all"> <i className="fas fa-tasks"></i> </label>

				<input type="radio" className="btn-check" id="done" name="status" />
				<label className="btn btn-outline-secondary rounded-0" htmlFor="done"> 	<i className="fas fa-clipboard-check"></i> </label>

				<input type="radio" className="btn-check" id="doing" name="status" />
				<label className="btn btn-outline-secondary rounded-0" htmlFor="doing"><i className="far fa-clipboard"></i> </label>
				
				
				
			</div>

		)
	}
}


export default StatusFilter;
