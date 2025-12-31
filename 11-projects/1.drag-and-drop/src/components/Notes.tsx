import Note from "./Note";

type NotesProps = {
  notes: { id: number; text: string }[]
  setNotes: React.Dispatch<React.SetStateAction<{ id: number; text: string }[]>>
}

const Notes = ({ notes, setNotes }: NotesProps) => {
  return (
    <div>
      {notes.map((note) => (
        <Note key={note.id} content={note.text} />
      ))}
    </div>
  )
}

export default Notes