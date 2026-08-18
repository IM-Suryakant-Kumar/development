import { useState } from "react";
import Notes from "./components/Notes";

const App = () => {
	const [notes, setNotes] = useState<INote[]>([
		{ id: 1, content: "note1" },
		{ id: 2, content: "note2" },
		{ id: 3, content: "note3" },
	]);
	const [note, setNote] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (note)
			setNotes((prevNotes) => [
				...prevNotes,
				{ id: prevNotes.length + 1, content: note },
			]);
		setNote("");
	};

	return (
		<div className="p-4">
			<form
				onSubmit={handleSubmit}
				className="w-sm mx-auto border border-gray-300 rounded"
			>
				<input
					className="w-4/5 outline-0 p-2"
					type="text"
					value={note}
					onChange={(e) => setNote(e.target.value)}
				/>
				<button className="w-1/5 h-full bg-gray-700 text-white p-2 cursor-pointer rounded">
					Add
				</button>
			</form>
			<Notes notes={notes} setNotes={setNotes} />
		</div>
	);
};

export default App;
