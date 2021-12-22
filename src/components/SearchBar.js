import { Component } from "react";
import StatusFilter from "./StatusFilter";
import TextFilter from "./TextFilter";

// function SearchBar(props) {
// 	return (
// 		<div className="mt-4 d-flex">
// 			<TextFilter
// 				searchText={props.searchText}
// 				setSearchText={props.setSearchText}
// 			/>
// 			<StatusFilter
// 				setSearchStatus={props.setSearchStatus}
// 				searchStatus={props.searchStatus}
// 			/>
// 		</div>
// 	);
// }

class SearchBar extends Component {
	render(){
		return(
			<div className="mt-4 d-flex">
				<TextFilter/>
				<StatusFilter/>

			</div>
		)
	}
}

export default SearchBar;
