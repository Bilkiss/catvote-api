const express = require('express');
const router = express.Router();

// Require cat_controller
const cat_controller = require('../controller/cat.controller');

// Get all cats
router.get('/', cat_controller.cat_list);


// Get all cats
router.post('/:id', cat_controller.like_cat);

module.exports = router;