require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')


//Express Settings

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))


//controllers


//app listen

app.listen(process.env.PORT, ()=>{
    console.log(`Listening on Port: ${process.env.PORT}`)
})