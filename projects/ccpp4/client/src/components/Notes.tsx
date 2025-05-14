import { FC } from "react";
import { Note } from ".";

interface Props {
	notes: number[];
}

export const Notes: FC<Props> = ({ notes }) => {
	return (
		<article className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-4 my-4">
			{notes.map((note, idx) => (
				<Note key={idx * 2} note={note} />
			))}
		</article>
	);
};
