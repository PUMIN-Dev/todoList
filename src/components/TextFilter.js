function TextFilter(props) {
	const handleChangeText = (event) => {
		props.setSearchText(event.target.value);
	};

	return (
		<div className="input-group">
			<input
				type="text"
				className="form-control rounded-0"
				onChange={handleChangeText}
				value={props.searchText}
			/>
			<button
				className="btn btn-secondary rounded-0"
				onClick={() => props.setSearchText}
			>
				<i className="fas fa-times"> </i>
			</button>
		</div>
	);
}
export default TextFilter;
