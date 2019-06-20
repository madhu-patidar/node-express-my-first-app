let models = require('../models');

exports.get_landing = function(req, res, next) {
  res.render('landing', { title: 'Express12' });
}

exports.show_leads = function(req, res, next) {
  models.Lead.findAll({order: [
    ['createdAt', 'DESC'],
   
],}).then(leads => {
    res.render('landing', { title: 'Express12', leads : leads });
  });
}


exports.show_lead = function(req, res, next) {
  models.Lead.findOne({
    where : {
      id : req.params.lead_id
    }
  }).then(lead => {
    res.render('lead', { title: 'Express12', lead : lead });
  });
}

exports.show_edit_lead = function(req, res, next) {
  models.Lead.findOne({
    where : {
      id : req.params.lead_id
    }
  }).then(lead => {
    res.render('lead/edit_lead', { lead : lead });
  });
}

exports.delete_lead = function(req, res, next) {
  models.Lead.destroy({
    where : {
      id : req.params.lead_id
    }
  }).then(lead => {
    res.redirect('/leads');
  });
}

exports.delete_lead_json = function(req, res, next) {
  models.Lead.destroy({
    where : {
      id : req.params.lead_id
    }
  }).then(lead => {
    res.send({msg : 'Success'});
  });
}

exports.edit_lead = function(req, res, next) {
  models.Lead.update({
    email : req.body.email
  },{
    where : {
      id : req.params.lead_id
    }
  }).then(result => {
    res.redirect('/lead/'+ req.params.lead_id);
  });
}

exports.submit_lead = function(req, res, next) {
  models.Lead.create({
    email : req.body.email
  }).then(lead =>{
    res.redirect('/leads')
  })
}