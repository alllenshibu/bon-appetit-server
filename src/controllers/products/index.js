const addProduct = require('./addProduct')
const deleteProduct = require('./deleteProduct')
const getAllProducts = require('./getAllProducts')
const getProduct = require('./getProduct')
const updateProduct = require('./updateProduct')

module.exports = { ...addProduct, ...deleteProduct, ...getAllProducts, ...getProduct, ...updateProduct }