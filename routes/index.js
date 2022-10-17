const express = require('express')

const router = express.Router()

router.Router('/productos')
    .post(()=> console.log('post'))
    .get(()=>console.log('get'))


module.exports = router

