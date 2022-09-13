const router = require('express').Router();

const ProductController = require('./product.service');

router.post('/newProduct', ProductController.newProduct);
router.post('/addReview', ProductController.addReview);
//router.post('/signin',AuthController.isAuthenticated, UserController.signin,AuthController.newToken);

module.exports= router;