import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import helmet from 'helmet'
import path from 'path'

//Load environment variables
require('dotenv').config()

//Create an express instance
const app = express()

//Import controllers
import * as apiController from './controllers/api'

//Setup api middlewares
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())

app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }))

//Mount routes to the api
app.get('/ping', apiController.Ping)

//Catch all 404
app.get('/*', apiController.FourOFour)

export default app
