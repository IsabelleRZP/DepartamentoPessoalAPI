const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose') 

mongoose.connect('mongodb+srv://personal-department:SrOzFMKSkbDK86Rb@cluster0.gaxqkxk.mongodb.net/personal-department-db?retryWrites=true&w=majority')

app.use(express.urlencoded({
    extended: true
}))

require('./models/folhaSalarial')

const folhaSalarialRouter = require('./routers/folha-router')
const index = require('./routers/index')

app.use('/', index)
app.use('/folhaSalarial', folhaSalarialRouter)
module.exports = app;