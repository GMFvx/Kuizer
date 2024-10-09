const express = require('express')
const path = require('path');
const authController = require('../controllers/authController')

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/home2', (req, res) => {
    res.sendFile(path.join(__dirname, '../../FRONT/src/pages/login-user/home2.html')); 
});

module.exports = router;