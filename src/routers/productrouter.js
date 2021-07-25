// untuk menghandle router table product

const express = require('express')
const prdctrl = require('../controllers/productctrl')


const prdrouter = express.Router()
prdrouter
.get('/product', prdctrl.getlist )
.get('/product/:id', prdctrl.getdetail)
.post('/product', prdctrl.insert)
.delete('/product/:id', prdctrl.del)
.put('/product/:id', prdctrl.update)

module.exports = prdrouter