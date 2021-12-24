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
				// setSearchStatus={props.setSearchStatus}
				// searchStatus={props.searchStatus}
// 			/>
// 		</div>
// 	);

// }

function SearchBar(props) {

	// console.log(props)
	return (
		<div className="mt-4 d-flex">
			<TextFilter setSearchTerm = {props.setSearchTerm} text = {props.searchTerm.text} />
			<StatusFilter searchStatus={props.searchStatus} setSearchStatus={props.setSearchStatus}  />
		</div>
	);
}

export default SearchBar;
