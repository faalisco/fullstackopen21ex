import React, {useState, useEffect} from 'react'

import axios from 'axios'

const App = () =>{
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/notes').then(response =>{
      setNotes(response.data)
    })
  }, [])

  console.log(notes);

  return (
    <div>
      {notes.map( note => {
        return <li key={note.id}>{note.content}</li>
      }
      )}
    </div>
  )
}


export default App