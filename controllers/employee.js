let models = require('../models');
let bcrypt = require('bcrypt');
let passport = require('passport');


const { isEmpty } = require('lodash');
const { validateUser } = require('../validators/signup')

exports.create = function(req, res, next) {
    models.Employee.create({
      email : req.body.email,
      firstName:  req.body.firstName,
      lastName:  req.body.lastName,
      gender:  req.body.gender,
      ip_address:  req.body.ip_address,
      salary:  req.body.salary,
      data_of_joining:  req.body.data_of_joining,
      contact_number:  req.body.contact_number,
      profile:  req.body.profile,
      department:  req.body.department,
      companyId:  req.body.companyId,
    }).then(employee =>{
      res.send(req.body)
    })
  }

  exports.index = function(req, res, next) {
    models.Employee.findAll({order: [
      ['createdAt', 'DESC'],
     
  ],}).then(employees => {
      res.send(  employees );
    });
  }


  exports.getEmployee = function(req, res, next) {
    models.Employee.findOne({
      where: {id: req.params.id }, include: 'company'
    }).then(employee => {
      res.json({employee : employee})
    },
    error =>{
        res.json({msg:error})
    });
  }

  exports.delete = function(req, res, next) {
    models.Employee.destroy({
      where : {
        id : req.params.id
      }
    }).then(employee => {
      res.json({msg: "sucessfuly deleted"})
    },
    error =>{
        res.json({msg:error})
    });
  }
  

exports.update = function(req, res, next) {
    models.Employee.update({
        email : req.body.email,
        firstName:  req.body.firstName,
        lastName:  req.body.lastName,
        gender:  req.body.gender,
        ip_address:  req.body.ip_address,
        salary:  req.body.salary,
        data_of_joining:  req.body.data_of_joining,
        contact_number:  req.body.contact_number,
        profile:  req.body.profile,
        department:  req.body.department,
    },{
      where : {
        id : req.params.id
      }
    }).then(result => {
        res.json({msg: "sucessfuly updated"})
    });
  }
  