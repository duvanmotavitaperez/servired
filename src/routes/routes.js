const express = require('express')
const path = require('path')
const router = express.Router()
router.get('/main', (req,res) => {
    res.sendFile(path.resolve(__dirname, '../public/index.html'))
})
router.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/home.html'))
})
module.exports = router