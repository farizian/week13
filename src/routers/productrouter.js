// untuk menghandle router table product

const express = require('express');
const prdctrl = require('../controllers/productctrl');
const midAuth = require('../middleware/auth');

const prdrouter = express.Router();
prdrouter
  .get('/product', midAuth, prdctrl.getlist)
  .get('/product/:id', midAuth, prdctrl.getdetail)
  .post('/product', midAuth, prdctrl.insert)
  .delete('/product/:id', midAuth, prdctrl.del)
  .put('/product/:id', midAuth, prdctrl.update);

module.exports = prdrouter;
