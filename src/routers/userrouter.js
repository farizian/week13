// untuk menghandle router table user

const express = require('express');
const userctrl = require('../controllers/userctrl');
const midAuth = require('../middleware/auth');

const userrouter = express.Router();
userrouter
  .get('/user', midAuth, userctrl.getlist)
  .get('/user/:id', midAuth, userctrl.getdetail)
  .post('/user', userctrl.insert)
  .post('/login', userctrl.login)
  .delete('/user/:id', midAuth, userctrl.del)
  .put('/user/:id', midAuth, userctrl.update);

module.exports = userrouter;
