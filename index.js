const app = require('express')();
const consign = require('consign');
const db = require('./config/db');
const mongoose = require('mongoose')
require('./config/mongodb')

app.db = db
app.mongoose = mongoose

consign()
  .then('./config/middlewares.js')
  .then('./api')
  .then('./schedules')
  .then('./config/routes.js')
  .into(app)

app.listen(3000, () =>{
    console.log('Rodando na porta 3000')
})