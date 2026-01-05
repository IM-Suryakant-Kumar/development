import { useEffect } from "react";
import Note from "./Note";

const Notes = ({ notes, setNotes }) => {
	const determineNewPosition = () => {
		const maxX = window.innerWidth - 250;
		const maxY = window.innerHeight - 250;

		return {
			x: Math.floor(Math.random() * maxX),
			y: Math.floor(Math.random() * maxY),
		};
	};

	useEffect(() => {
		const savedNotes = [];

		const updatedNotes = notes.map((note) => {
			const savedNote = null;

			if (savedNote) {
				return {};
			} else {
				const position = determineNewPosition();
				return { ...note, position };
			}
		});

		setNotes(updatedNotes);
	}, [notes.length]);

	return notes.map((note) => (
		<Note key={note.id} initialPosition={note.position} content={note.text} />
	));
};

export default Notes;
