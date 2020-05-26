const Product = require('../models/products')

exports.getIndex = async (req, res) => {
  res.render('shop/index', {
    pageTitle: 'shop',
    path: '/'
  })
}

exports.getProducts = async (req, res) => {
  const products =  await Product.fetchAll()
  res.render('shop/product-list', {
    pageTitle: 'All product',
    products: products,
    path: '/products'
  })
}

exports.getCart = async (req, res) => {
  res.render('shop/cart', {
    pageTitle: 'My Cart',
    path: '/cart'
  })
}

exports.getCheckout = async (req, res) => {
  res.render('shop/checkout', {
    pageTitle: 'Checkout',
    path: '/checkout'
  })
}