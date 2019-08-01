var express = require('express');
var router = express.Router();

let  landing = require('../controllers/landing')
let  user = require('../controllers/user')
let  employee = require('../controllers/employee')
let { isLoggedIn, hasAuth } = require('../middleware/hasAuth');
router.get('/login', user.show_login);
router.get('/signup', user.show_signup);
router.post('/login', user.login);
router.post('/signup', user.signup);
router.get('/logout', user.logout);
router.post('/signup', user.signup);
/* GET home page. */

router.get('/employees', employee.index);
router.post('/employees', employee.create);
router.delete('/employees/:id', employee.delete);
router.put('/employees/:id', employee.update);
router.get('/employees/:id', employee.getEmployee);


router.get('/', landing.get_landing);
router.post('/', landing.submit_lead);
router.get('/leads', hasAuth, landing.show_leads);
router.get('/lead/:lead_id', isLoggedIn, landing.show_lead);
router.get('/lead/:lead_id/edit', landing.show_edit_lead);
router.post('/lead/:lead_id/edit', landing.edit_lead);
router.post('/lead/:lead_id/delete', landing.delete_lead);
router.post('/lead/:lead_id/delete-json', landing.delete_lead_json);

module.exports = router;
