const Product = require('../models/products')

exports.getProducts = async (req, res) => {
  const products =  await Product.fetchAll()
  res.render('shop/product-list', {
    pageTitle: 'shop',
    products: products,
    path: '/'
  })
}

exports.getProductDetails = async (req, res) => {
  res.render('shop/product-details', {
    pageTitle: 'Product Details',
    path: '/product'
  })
}

exports.getCart = async (req, res) => {
  res.render('shop/cart', {
    pageTitle: 'Cart',
    path: '/cart'
  })
}

exports.getCheckout = async (req, res) => {
  res.render('shop/checkout', {
    pageTitle: 'Checkout',
    path: '/checkout'
  })
}