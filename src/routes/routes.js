const express = require('express')
const cookieParser = require('cookie-parser')
const router = express.Router()
const multer = require('multer')
const upload = multer({dest: '../uploads'})
const Users = require('../models/user')
const path = require('path')


router.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, '../public/index.html'))
})
router.get('/login', (req,res) => {
    res.sendFile(path.resolve(__dirname, '../public/login.html'))
})
router.post('/login',upload.none(), async (req,res) => {
    let searchUserName = await Users.findOne({username: req.body.username})
    if(!searchUserName){
        res.json({error: 'Usuario o contraseña invalida'})
    }else{
        let success = await Users.matchPassword(req.body.userpass)
        if(success){
            res.json({conf:'success'})
        }else{
            res.json({error:'Usuario o contraseña invalida'})
        }
    }
})


router.get('/Home', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/home.html'))
})
router.post('/Home', (req, res) => {
    
})

router.get('/BuscarEnvio', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/BuscarEnvio.html'))
})
router.get('/ProgramarEnvio', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/programarEnvio.html'))
})
router.post('/ProgramarEnvio', (req, res) => {   
    res.redirect('/Home')
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
router.get('/register', (req, res) => {
    res.sendFile(path.resolve('src/public/register.html'))
})
router.post('/register', upload.none(), async function (req, res, next) {
    console.log(req.body.name)
    const {name, email, number, city, lastname, departament, direction, username, userpass,confPass} = req.body
    const newUser = new Users({name, email, number, city, lastname, departament, direction, username, userpass})
    let searchUserName = await Users.findOne({username: username})
    let searchEmail =  await Users.findOne({email: email})
    if(searchUserName){
        console.log(searchUserName)
        res.json({refused: true, error:'The user has already exist, please try again'})
    }
    else if(searchEmail){
        res.json({refused: true, error:'The mail address already exist, please try again.'})
    }
    else {
        try{
            newUser.encryptPassword(userpass).then(hash => {
                newUser.userpass = hash
            })
            newUser.save()
            res.json({conf: 'register success'})
        }
        catch(e){
            console.log(e)
            res.json({conf: 'There was an error'})
        }
    }
    
})
module.exports = router