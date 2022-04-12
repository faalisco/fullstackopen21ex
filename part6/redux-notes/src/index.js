import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'

// import noteService from './services/notes'

// import { createNote } from './reducers/noteReducer'
// import { filterChange } from './reducers/filterReducer'

// const store = configureStore({
//   reducer: {
//     notes: noteReducer,
//     filter: filterReducer,
//   },
// })

// noteService.getAll().then((notes) => store.dispatch(setNotes(notes)))

// const store = createStore(reducer)
// console.log(store.getState())

// store.subscribe(() => console.log(store.getState()))
// store.dispatch(filterChange('IMPORTANT'))
// store.dispatch(
//   createNote('combineReducers forms one reducer from many simple reducers')
// )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
