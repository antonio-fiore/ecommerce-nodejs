const router = require('express').Router();

const UserController = require('./user.service');
const AuthController = require('./auth.service');

router.post('/signup', UserController.signup);
router.post('/signin',AuthController.isAuthenticated, UserController.signin,AuthController.newToken);

module.exports= router;