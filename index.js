const { response } = require('express')
const express = require('express')

const app =  express()

app.get('/componentes',(req,res) => {
    res.json({name:'rtx 3090',precio: 34000, stock: 32})
})
app.post('/nuevo',(req,res)=>{
    res.json({success: true, response: 'Componente insertado correctamente'})
})

app.get('/componentes/:tarjetasgraficas',(req,res)=>{
    res.json({success: true, response:'listado de tarjetas de video'})
})


app.listen(4000,()=>console.log('Todo bien'))