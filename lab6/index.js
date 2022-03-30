var express = require('express')
var surveyController = require('./surveyController')

var app = express()
app.set('view engine', 'ejs')
app.use(express.static('./lab1'))

surveyController(app)
app.listen(8000)