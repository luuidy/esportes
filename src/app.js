const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const flash = require('req-flash')
require('dotenv/config');
let session = require('express-session')
let port = process.env.PORT || 3000


const app = express()

// middlewares
app.use(session({secret: '123', resave: true, saveUninitialized: true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(flash())
app.use(express.static(path.join("src", "public")))


// settings
app.set("views engine", "ejs")
app.set("views", 'src/views')


// routes
app.use('/admin/produto', require('./routes/produtoRoute'))
//app.use('/admin/quadra', require('./routes/quadraRoute'))
//app.use('/admin/caixa', require('./routes/caixaRoute'))

app.listen(port, console.log(`Server On: http://localhost:${port}`))