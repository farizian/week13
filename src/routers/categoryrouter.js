// untuk menghandle router table category

const express = require('express')
const categoryctrl = require('../controllers/categoryctrl')


const categoryrouter = express.Router()
categoryrouter
.get('/category', categoryctrl.getlist )
.get('/category/:id', categoryctrl.getdetail)
.post('/category', categoryctrl.insert)
.delete('/category/:id', categoryctrl.del)
.put('/category/:id', categoryctrl.update)

module.exports = categoryrouter