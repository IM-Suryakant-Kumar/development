import { useEffect } from "react";
import { useState } from "react";

const Todo = () => {
	const [todos, setTodos] = useState(
		JSON.parse(localStorage.getItem("todos") || "[]")
	);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return (
		<div className="flex flex-col w-xs m-4">
			<input
				className="outline-0 border-2 border-gray-400 p-1"
				type="text"
				placeholder="Add.."
				onKeyDown={(e) => {
					e.key === "Enter" &&
						setTodos((prevTodos) => [...prevTodos, e.target.value]);
				}}
			/>
			<ul>
				{todos?.map((t, i) => (
					<li key={i}>{t}</li>
				))}
			</ul>
		</div>
	);
};

export default Todo;
