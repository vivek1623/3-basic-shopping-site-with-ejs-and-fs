const fs = require('fs')
const path = require('path')

const productFilePath = path.join(__dirname, '../', 'database', 'products.json')

const readProductFromFile = callback => {
  fs.readFile(productFilePath, (err, fileContent) => {
    let products = []
    if (!err)
      products = JSON.parse(fileContent)
    callback(products)
  })
}

const writeProductInFile = products => {
  fs.writeFile(productFilePath, JSON.stringify(products), err => {
    console.log(err)
  })
}

module.exports = class Product {
  constructor(t) {
    this.title = t
  }

  save() {
    readProductFromFile(products => {
      products.push(this)
      writeProductInFile(products)
    })
  }

  static fetchAll() {
    const p = path.join(__dirname, '../', 'database', 'products.json')
    return new Promise(readProductFromFile)
  }
}