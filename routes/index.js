const express = require('express')
const { addProduct, deleteProduct , readProduct } = require('../controllers/products.controllers')
const router = express.Router()

router.route('/productos')
    .post(addProduct)
    .get(readProduct)


router.route('/productos/:id').delete(deleteProduct)


module.exports = router


/* {
    "nombre":"rtx 4090",
    "precio":2000000,
    "marca":"evga",
    "linea":"40 series",
    "memoria":"20gb",
    "tipo":"ddr5"
} */