import { useState } from "react";
import Notes from "./components/Notes";

const App = () => {
	const [notes, setNotes] = useState([
		{ id: 1, text: "note 1" },
		{ id: 2, text: "note 2" },
	]);

	return <Notes notes={notes} setNotes={setNotes} />
};

export default App;
