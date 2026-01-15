import AutoComplete from "./components/AutoComplete";

const App = () => {
	const suggestions = ["Apple", "Banana", "Orange", "Pineapple", "Grapes"];

	return <>
    <h1>Autocomplete Example</h1>
    <AutoComplete suggestions={suggestions} />
  </>;
};

export default App;
