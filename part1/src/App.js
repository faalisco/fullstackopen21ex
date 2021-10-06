import React, { useState } from "react"
import Note from './components/Note'

const App = ({ notes }) => {

   return (
      <div>
         <h1>Notes</h1>
         <ul>
            {notes.map(note =>
               <Note key={note.id} note={note.content} />
            )}
         </ul>
      </div>

   )
}




































//Event Handling Revisited
// const App = () => {
//   const [value, setValue] = useState(10)



//   const setToValue = (newValue) => setValue(newValue)

//   return (
//     <div>
//       {value}
//       <button onClick={() => setToValue(1000)}>
//         thousand
//       </button>
//       <button onClick={() => setToValue(0)}>
//         reset
//       </button>
//       <button onClick={() => setToValue(value + 1)}>
//         increment
//       </button>
//     </div>
//   )
// }























// //conditional rendering
// const History = (props) =>{
//   if (props.allClicks.length === 0){
//     return (
//       <div>
//         The app is used by pressing the buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ({handleClick, text}) => (
//     <button onClick={handleClick}>
//     {text}
//   </button>
// )

// //rendering arrays
// const App = () =>{
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }


//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }


//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text='left' />
//       <Button handleClick={handleRightClick} text='right' />
//       {right}
//       <History allClicks={allClicks} />
//     </div>
//   )
// }



























// ///complex states
// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0,
//     right: 0
//   })

//   const handleLeftClick = () => setClicks({
//       ...clicks,
//       left: clicks.left + 1
//     })

//   const handleRightClick = () =>
//     setClicks({
//       ...clicks,
//       right: clicks.right + 1
//     })
//   return(
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}

//     </div>
//   )
// }

























// const Display = ({counter}) => <div>{counter}</div>

// const Button = ({handleClick, text}) =>{
//   return(
//     <button onClick={handleClick}>
//       {text}
//     </button>
//   )
// }



// const App = () => {
//   const [counter, setCounter] = useState(0)

//   const increaseByOne = () => setCounter(counter + 1)
//   const decreaseByOne = () => setCounter(counter - 1)
//   const setToZero = () => setCounter(0)

//   /// complex states
//   const {left, setLeft} = useState(0)
//   const {right, setRight} = useState(0)

//   return (
//     <div>

//       {left}
//       <button onClick={() => setLeft(left + 1)}>
//         left
//       </button>

//       <button onClick={() => setRight(right + 1)}>
//         right
//       </button>
//       {right}

//       <Display counter={counter} />

//       <Button
//         handleClick={increaseByOne}
//         text='plus'
//       />

//       <Button 
//         handleClick={setToZero}
//         text='zero'
//       />

//       <Button 
//         handleClick={decreaseByOne}
//         text='minus'
//       />

//     </div>

//   )
// }





















// const Footer = () => {
//   return (
//     <div>
//       greatings app created by <a href="https://github.com/faalisco">faalisco</a>
//     </div>
//   )
// }

// const Hello = ({name, age}) => {
//   const bornYear = () => new Date().getFullYear() - age
//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probally born in {bornYear()} </p>
//     </div>
//  )
// }

// const App = () =>{
//   const name = 'Lamin'
//   const age = '23'
//  return (
//   <>
//     <h1>Greetings</h1>
//     <Hello name="Maya" age={26+10} />
//     <Hello name={name} age={age} />
//     <Footer />
//   </>
//  )
// }

export default App;
