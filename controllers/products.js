const Product = require('../models/products')

exports.getAddProducts = (req, res) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product'
  })
}

exports.addProduct = (req, res) => {
  if (req.body.title && req.body.title.trim().length > 0) {
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/')
  } else {
    res.redirect('/admin/add-product')
  }
}

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
