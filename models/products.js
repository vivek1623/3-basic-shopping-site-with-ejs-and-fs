const fs = require('fs')
const path = require('path')

const readProductFromFile = callback => {
  const p = path.join(__dirname, '../', 'database', 'products.json')
  fs.readFile(p, (err, fileContent) => {
    let products = []
    if (!err)
      products = JSON.parse(fileContent)
    callback(products)
  })
}

const writeProductInFile = products => {
  const p = path.join(__dirname, '../', 'database', 'products.json')
  fs.writeFile(p, JSON.stringify(products), err => {
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