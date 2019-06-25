let models = require('../models');
let bcrypt = require('bcrypt');
let passport = require('passport');
let myPassport = require('../passport_setup')(passport);
let flash = require('connect-flash');

const { isEmpty } = require('lodash');
const { validateUser } = require('../validators/signup')

exports.show_login = function(req, res, next){
    res.render('user/login', {formData : {}, errors : {}} )
}

exports.show_signup = function(req, res, next){
    res.render('user/signup', {formData : {}, errors : {}} )
}

rerender_signup = function(errors, req, res, next){
  res.render('user/signup', {formData : req.body, errors : errors })
}

const generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

exports.login = function(req, res, next) {
  passport.authenticate('local', {
    successRedirect : "/",
    failureRedirect : "/login",
    failureFlash : true
  })(req, res, next);
}

exports.signup = function(req, res, next) {
  let errors = {};
  let newUser;
  return validateUser(errors, req).then(errors => {
    if(!isEmpty(errors)) {
      rerender_signup(errors, req, res, next);
    }else{
      models.User.findOne({
        where : {
          is_admin : true
        }
      }).then(user => {
        
        if(user !== null){
          newUser = models.User.build({
            email : req.body.email,
            password : generateHash(req.body.password),
          });
        }else{
          newUser = models.User.build({
            email : req.body.email,
            is_admin : true,
            password : generateHash(req.body.password),
          });
        }
        return newUser.save().then(result => {
          passport.authenticate('local', {
            successRedirect : "/",
            failureRedirect : "/signup",
            failureFlash : true
          })(req, res, next);
        })
      })
    }
  })
  
}

exports.logout = function(req, res, next) {
  req.logout();
  req.session.destroy();
  res.redirect('/');
}