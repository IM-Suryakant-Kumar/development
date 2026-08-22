import { useState } from "react";
import Input from "./Input";
import TodoList from "./TodoList";

const Todo = () => {
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<>
			<Input todo={todo} setTodo={setTodo} setTodos={setTodos} />
      <TodoList todos={todos} />
		</>
	);
};

export default Todo;
