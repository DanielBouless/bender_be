require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const defineCurrentUser = require('./middleware/defineCurrentUser')


//Express Settings

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
//app.use(defineCurrentUser)
//controllers

app.use('/users', require('./controllers/users_controller'))
app.use('/authentication', require('./controllers/authentication'))
//app listen


app.get('/',(req, res)=>{
    res.send('welcome to bender you cheeky fuck')
} )


app.listen(process.env.PORT, ()=>{
    console.log(`Listening on Port: ${process.env.PORT}`)
})