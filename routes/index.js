const express = require('express')

const router = express.Router()

router.route('/productos')
    .post(()=> console.log('post'))
    .get(()=>console.log('get'))


module.exports = router

