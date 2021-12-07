const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()
app.set('port', process.env.PORT || 3000)

//Morgan nos ayuda a manejar todas las peticiones que se reciben y lo imprime en la consola
app.use(morgan('dev')) 
app.use(express.json())

//Routes
app.use(require('./routes/routes'))

app.use(express.static(path.join(__dirname, '/public')))

app.listen(3000, () => {
    console.log(__dirname)
})