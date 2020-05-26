const express = require('express')

const shopControllers = require('../controllers/shop')

const router = express.Router()

router.get('/', shopControllers.getProducts)

router.get('/product', shopControllers.getProductDetails)

router.get('/cart', shopControllers.getCart)

router.get('/checkout', shopControllers.getCheckout)

module.exports = router