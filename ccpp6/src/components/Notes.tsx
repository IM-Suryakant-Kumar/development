import Note from "./Note";

interface Props {
	notes: INote[];
	setNotes: React.Dispatch<React.SetStateAction<INote[]>>;
}

const Notes = ({ notes, setNotes }: Props) => {
  
	return <div className="flex gap-2">{notes.map((n) => <Note key={n.id} content={n.content} />)}</div>;
};

export default Notes;
