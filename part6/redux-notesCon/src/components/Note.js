import { connect } from 'react-redux'
import { createNote } from '../reducers/noteReducer'

const NewNote = ({ createNote }) => {
  // const dispatch = useDispatch()

  const addNote = async (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    createNote(content)
  }

  return (
    <form onSubmit={addNote}>
      <input name='note' />
      <button type='submit'>add</button>
    </form>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNote: (value) => {
      dispatch(createNote(value))
    },
  }
}

// const mapDispatchToProps = {
//   createNote,
// }

const ConnectedNewNote = connect(null, mapDispatchToProps)(NewNote)

export default ConnectedNewNote
