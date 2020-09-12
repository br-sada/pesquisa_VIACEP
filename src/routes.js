const express = require('express')
const routes = express.Router()

routes.get('/', function(req, res) {
    return res.render('viacep/index')
})

routes.get('/viacep', function(req, res){
    return res.render('viacep/index')
})

module.exports = routes