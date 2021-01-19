const express = require('express')
const Controllers = require('../controllers/produtoController')

const Router = express.Router()

Router.get('/', Controllers.list)

Router.post('/', Controllers.filtro)

Router.get('/add', Controllers.abreAdd)

Router.post('/add', Controllers.add)

Router.get('/edit/:id', Controllers.abreAdd)

Router.post('/edit/:id', Controllers.abreEdit)

module.exports = Router