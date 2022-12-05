var express = require('express');


const { Router } = require('express');
var userController = require('../controllers/userController');


const router = express.Router();



router.get('/findAll', userController.findAll);
router.post('/createUser',userController.createUser);
router.get('/deleteUser',userController.deleteUser);
router.put('/updateUser',userController.updateUser);



module.exports = router;

