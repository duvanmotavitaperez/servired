const express = require('express')
const path = require('path')
const router = express.Router()
router.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, '../public/index.html'))
})
router.get('/login', (req,res) => {
    res.sendFile(path.resolve(__dirname, '../public/login.html'))
})
router.get('/register', (req,res) => {
    res.sendFile(path.resolve(__dirname, '../public/register.html'))
})
router.get('/Home', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/home.html'))
})
router.get('/BuscarEnvio', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/BuscarEnvio.html'))
})
router.get('/ProgramarEnvio', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/programarEnvio.html'))
})
router.get('/CancelarOrden', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/cancelarOrden.html'))
})
router.get('/DetalleEnvio', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/detalleEnvio.html'))
})
router.get('/DetalleRastreo', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/detalleRastreo.html'))
})
module.exports = router