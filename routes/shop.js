const express = require('express')

const productControllers = require('../controllers/products')

const router = express.Router()

router.get('/', productControllers.getProducts)

router.get('/product', productControllers.getProductDetails)

router.get('/cart', productControllers.getCart)

router.get('/checkout', productControllers.getCheckout)

module.exports = router