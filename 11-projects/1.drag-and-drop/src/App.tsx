import { useState } from "react"
import Notes from "./components/Notes"

const App = () => {
  const [notes, setNotes] = useState([
    { id: 1, text: 'First Note' },
    { id: 2, text: 'Second Note' },
    { id: 3, text: 'Third Note' },
  ])

  return (
    <div>
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  )
}

export default App