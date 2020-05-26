const express = require('express')

const adminControllers = require('../controllers/admin')

const router = express.Router()

router.get('/add-product', adminControllers.getAddProducts)

router.post('/product', adminControllers.addProduct)

module.exports = router
