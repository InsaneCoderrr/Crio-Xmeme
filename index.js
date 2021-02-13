const express = require('express')
const app = express() 
const morgan = require('morgan')
const cors = require('cors')
const mongoSanitize = require('express-mongo-sanitize');

const memeRouter = require('./routes/memeRouter')

const {notFound,errorHandler} = require('./middleware/errorMiddleware')

const dbConfig = require('./db')
dbConfig()

//MIDDLEWARE:
app.use(cors())              //CORS
app.use(express.json())      //Body parser
app.use(morgan('dev'))       //Logger
app.use(mongoSanitize());    //Prevent mongo injections

//ROUTES
app.use('/',memeRouter)

//PAGE NOT FOUND
app.use(notFound)

//ERROR HANDLER
app.use(errorHandler)

app.listen(5000,() => console.log("Running on port 5000"))