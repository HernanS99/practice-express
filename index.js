const { response } = require('express')
const express = require('express')

const app =  express()

app.get('/componentes',(req,res) => {
    res.json({name:'rtx 3090',precio: 34000, stock: 32})
})



app.listen(4000,()=>console.log('Todo bien'))