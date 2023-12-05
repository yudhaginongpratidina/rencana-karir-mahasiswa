// IMPORT LIBRARY
const cors = require('cors')
const dotenv = require('dotenv')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')




// INIT
dotenv.config()
const app = express()




// MIDDLEWARE
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))




// ROUTES
app.get('/*', (req, res) => res.status(404).json({ message: 'Not Found' }));



// SERVER LISTEN
app.listen(process.env.PORT, () =>  console.log(`Server listening on http://localhost:${process.env.PORT}`))