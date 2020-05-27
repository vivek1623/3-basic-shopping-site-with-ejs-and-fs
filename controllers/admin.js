const Product = require('../models/products')

exports.getAddProducts = (req, res) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product'
  })
}

exports.addProduct = (req, res) => {
  if (req.body.title && req.body.title.trim().length > 0) {
    const product = new Product(req.body)
    product.save()
    res.redirect('/admin/products')
  } else {
    res.redirect('/admin/add-product')
  }
}

exports.getProducts = async (req, res) => {
  const products = await Product.fetchAll()
  res.render('admin/products', {
    pageTitle: 'All admin products',
    products: products,
    path: '/admin/products'
  })
}