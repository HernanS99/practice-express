const express = require('express')
const { addProduct, deleteProduct } = require('../controllers/products.controllers')
const router = express.Router()

router.route('/productos')
    .post(addProduct)
    .get(deleteProduct)


module.exports = router

