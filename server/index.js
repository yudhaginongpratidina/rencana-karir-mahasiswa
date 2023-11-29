import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// CONFIG
dotenv.config()
const app           = express()
const port          = process.env.PORT || 3000 
const __filename    = fileURLToPath(import.meta.url);
const __dirname     = dirname(__filename);
const staticPath    = join(__dirname, 'public');

// MIDDLEWARE
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(staticPath));


// SERVER LISTEN
app.listen(port, () =>  console.log(`Server listening on http://localhost:${port}`))

