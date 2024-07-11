const express = require('express');
const userController = require('../Controllers/users.controllers');
const router = express.Router();
const asyncHandler = require('../Utils/asyncHandler'); 

router.post('/signup', asyncHandler(userController.userRegister));
router.post('/login', asyncHandler(userController.userLogin));

module.exports = router