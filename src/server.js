const db = require('./database')
const morgan = require('morgan')
const clc = require('colors')
const ipAddress = require('./routes/getIpAddress')

// app.set('port', process.env.PORT || 3000)

var express = require('express')
const cookieParser = require('cookie-parser')
var path = require('path')


var app = express()
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '/public')))

//Morgan nos ayuda a manejar todas las peticiones que se reciben y lo imprime en la consola
app.use(morgan('dev')) 

//Routes
app.use(require('./routes/routes'))

app.listen(3000, () => {
    console.log('(alt + clic) en '+ ` http://${ipAddress}:3000/ `.bgGray.black + ' para ingresar')
}) 