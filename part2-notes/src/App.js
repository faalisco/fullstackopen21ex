import React, { useState, useEffect, useRef } from 'react'
// import axios from 'axios'
import './index.css'
import Note from './components/Note'
import noteService from './services/notes'
import Notification from './components/NOtification'
import Footer from './components/Footer'
import LoginForm from './components/LoginForm'
import Togglable from './components/Togglable'




import loginServices from './services/login'
import NoteForm from './components/NoteForm'


const App = () => {
  // const [loginVisible, setLoginVisible] = useState(false)
  const [notes, setNotes] = useState([])
  // const [newNote, setNewNote] = useState('')
  const [showAll, setshowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const noteFormRef = useRef()

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])


  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      noteService.setToken(user.token)
    }
  }, [])


  const toggleImportantOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        )
        console.log(error)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })
  }


  const addNote = (noteObject) => {
    noteFormRef.current.toggleVisibility()

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
      })
  }


  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)



  const handleLogin = async (event) => {
    event.preventDefault()

    try{
      const user = await loginServices.login({
        username, password
      })


      window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user)
      )

      noteService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
      setSuccessMessage('Matti Luukkainen logged in')
      setTimeout(() => {
        setSuccessMessage(null)
      }, 5000)
    }catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }


  const loginForm = () => (
    <Togglable buttonLabel='login'>
      <LoginForm
        username={username}
        password={password}
        handleUsernameChange={({ target }) => setUsername(target.value)}
        handlePasswordChange={({ target }) => setPassword(target.value)}
        handleSubmit={handleLogin}
      />
    </Togglable>

  )


  const noteForm = () => (
    <Togglable buttonLabel="new note" ref={noteFormRef}>
      <NoteForm createNote={addNote}/>
    </Togglable>
  )


  return (
    <div>
      <h1>Notes</h1>

      <Notification message={errorMessage} clss='error' />
      <Notification message={successMessage} clss='success' />

      {user === null ?
        loginForm() :
        <div>
          <p> {user.name} logged-in</p>
          {noteForm()}

        </div>

      }

      <div>
        <button onClick={() => setshowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>

      <ul>
        {notesToShow.map((note, i) =>
          <Note
            key={i}
            note={note}
            toggleImportance={() => toggleImportantOf(note.id)}
          />
        )}
      </ul>


      <Footer />
    </div>
  )
}

export default App