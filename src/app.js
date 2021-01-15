const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const flash = require('req-flash')

const porta = process.env.PORT || 3000

const app = express()

// middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(flash())

// settings
app.set("view engine", "ejs")
app.set("view", 'src/views')

app.use(express.static(path.join("src", "public")))

app.listen(porta, console.log('Server On'))