const express = require('express')

const app = express()
                                                     

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

// const app = http.createServer((request, response) => {
//   response.writeHead(200, {'Content-Type': 'application/json'})
//   response.end(JSON.stringify(notes))
// })


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
