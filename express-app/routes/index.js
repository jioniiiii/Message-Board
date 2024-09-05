const express = require('express');
const router = express.Router();
const { AllMessages, Message } = require('../controllers/messageController');

//get all messages
router.get('/', AllMessages);

//for creating new messages
router.get('/new', (req, res) => {
  res.render('form');
});

//sumbition for new messages
router.post('/new', Message);

module.exports = router;