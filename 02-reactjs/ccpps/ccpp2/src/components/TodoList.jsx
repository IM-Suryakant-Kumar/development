const TodoList = ({ todos }) => {
	return (
		<ul className="flex flex-col items-center gap-2 mt-4">
			{todos?.map((todo) => (
				<li className="text-xl font-bold" key={todo}>{todo}</li>
			))}
		</ul>
	);
};

export default TodoList;
