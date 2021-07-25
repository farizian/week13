// untuk menghandle router table user

const express = require('express')
const userctrl = require('../controllers/userctrl')


const userrouter = express.Router()
userrouter
.get('/user', userctrl.getlist )
.get('/user/:id', userctrl.getdetail)
.post('/user', userctrl.insert)
.delete('/user/:id', userctrl.del)
.put('/user/:id', userctrl.update)

module.exports = userrouter