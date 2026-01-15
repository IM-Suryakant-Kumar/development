import Todo from "./components/Todo";

const App = () => {
	return (
		<div className="flex flex-col gap-6 m-4">
			<h1 className="text-2xl text-center">Todo CRUD App</h1>
			<Todo />
		</div>
	);
};

export default App;
