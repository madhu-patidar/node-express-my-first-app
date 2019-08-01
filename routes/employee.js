var express = require('express');
var router = express.Router();

let  employee = require('../controllers/employee')

/* GET employee page. */
router.get('/', employee.index);
router.post('/', employee.create);
router.delete('/:id', employee.delete);
router.put('/:id', employee.update);
router.get('/:id', employee.getEmployee);

module.exports = router;
