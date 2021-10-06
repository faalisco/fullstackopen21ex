require('dotenv').config()

const PORT = process.env.PORT
const MONGOOB_URI = process.env.MONGOOB_URI

module.exports = {
  MONGOOB_URI,
  PORT
}