const express = require('express')
const { addProduct, deleteProduct } = require('../controllers/products.controllers')
const router = express.Router()

router.route('/productos')
    .post(()=> console.log(addProduct()))
    .get(()=>console.log(deleteProduct()))


module.exports = router

