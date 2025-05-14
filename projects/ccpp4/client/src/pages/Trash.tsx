import { EmptyNote, Notes } from "../components";

export const Trash = () => {
	const notes = Array(2).fill(0);

	return notes.length ? (
		<article>
			<Notes notes={notes} />
		</article>
	) : (
		<EmptyNote />
	);
};
