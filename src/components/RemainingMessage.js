// function RemainingMessage({ remaining, total }) {
// 	return (
// 		<div className="mt-4 py-3 text-center bg-dark text-white">
// 			{remaining} of {total} Remaining
// 		</div>
// 	);
// }

function RemainingMessage(props) {

	const length = props.addTodo.filter((el) => { return el.completed === false } )

	return (
		<div className="mt-4 py-3 text-center bg-dark text-white">	{length.length} of {props.addTodo.length} Remaining </div>


	);
}

export default RemainingMessage;
