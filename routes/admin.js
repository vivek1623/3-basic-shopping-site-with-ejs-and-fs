const express = require('express')

const productControllers = require('../controllers/products')

const router = express.Router()

router.get('/add-product', productControllers.getAddProducts)

router.post('/product', productControllers.addProduct)

module.exports = router
