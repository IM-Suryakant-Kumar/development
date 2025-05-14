import { EmptyNote, Notes } from "../components";

export const Archive = () => {
  const notes = Array(3).fill(0);

	return notes.length ? (
		<article>
			<Notes notes={notes} />
		</article>
	) : (
		<EmptyNote />
	);
};
