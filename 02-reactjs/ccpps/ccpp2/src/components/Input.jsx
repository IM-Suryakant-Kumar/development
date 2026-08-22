const Input = ({ todo, setTodo, setTodos }) => {
	return (
		<div className="flex justify-center">
			<input
				type="text"
				className="p-2 outline-0 border border-gray-400"
				placeholder="Add new todo"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
			/>
			<h1 className="bg-gray-200 border border-gray-600 px-4 py-2 text-2xl font-semibold flex justify-center items-center cursor-pointer" onClick={() => setTodos(prevTodos => {
        setTodo("")
        return ([todo, ...prevTodos])
      })}>Add Todo</h1>
		</div>
	);
};

export default Input;
