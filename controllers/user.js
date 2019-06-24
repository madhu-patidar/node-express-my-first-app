let models = require('../models');

exports.show_login = function(req, res, next){
    res.render('user/login', {formdata : {}, error : {}} )
}

exports.show_signup = function(req, res, next){
    res.render('user/login', {formdata : {}, error : {}} )
}

exports.login = function(req, res, next) {
    models.Lead.create({
      email : req.body.email
    }).then(lead =>{
      res.redirect('/leads')
    })
}

exports.signup = function(req, res, next) {
    models.User.create({
      email : req.body.email,
      password : req.body.password,
    }).then(lead =>{
      res.redirect('/leads')
    })
}
