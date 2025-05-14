import { useSearchParams } from "react-router";
import { Filters, Notes, EmptyNote, AddNote } from "../components";

export const Note = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const filter = searchParams.get("filter");
	const notes = Array(4).fill(0);

	return notes.length ? (
		<>
      <AddNote />
			<Filters setSearchParams={setSearchParams} filter={filter} />
			<Notes notes={notes} />
		</>
	) : (
		<EmptyNote />
	);
};
