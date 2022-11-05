// const express = require('express')
// const router = express.Router()

// // BASE URL - /api/products
// const { getAllProducts, getProduct, addProduct, updateProduct, deleteProduct } = require('../controllers/products/index');
// const { protectAdmin } = require('../middlewares/auth');
// const { upload } = require('../utils/s3');


// router.get('/', getAllProducts);
// router.post('/addproduct', upload.single('file'), protectAdmin, addProduct);
// router.get('/:id', getProduct);
// router.patch('/:id', updateProduct);
// router.delete('/:id', deleteProduct);


// // module.exports = router