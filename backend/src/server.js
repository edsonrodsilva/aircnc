const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://omnistack9:omnistack9@cluster0-upsmw.mongodb.net/semana09?retryWrites=true&w=majority', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

//GET, POST, PUT, DELETE

//req.query = Acessar query params
//req.params = Acessar route params, usado para filtros
//req.body = Acessar corpo da requisicao

app.use(express.json())
app.use(routes)

app.listen(3333)

