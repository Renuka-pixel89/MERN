const express = require('express')
const router = express.Router()
const userController = require('../controllers/db.controllers');
// Retrieve all users
router.get('/', userController.findAll);
// Create a new user
router.post('/', userController.create);
//Chalapathijoin with id
router.get('/chalapathijoin', userController.chalapathijoin);
// Retrieve a single user with id
router.get('/:id', userController.findOne);
// Update a user with id
router.put('/:id', userController.update);
// Delete a user with id
router.delete('/:id', userController.delete);
module.exports = router