//modules
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()


//variables
const userRoute = require('./routes/userRoute')
const postRoute = require('./routes/postRoute')

//database connection
const dbLink = process.env.dbLink

mongoose.connect(dbLink, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    app.listen(7198, () => {
    console.log('Ibi me Server, plus my paddy Database!: we dey town! Na we we get am!')
    })
})
//middlewares
app.use(express.json())


//routes
app.use(userRoute)
app.use(postRoute)


//error responses

