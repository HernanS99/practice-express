const { v4: uuidv4} = require('uuid')

let productos = []

const addProduct = (req,res) =>{
    try{

        const  {nombre , precio ,marca , linea , memoria , tipo} = req.body

        const nuevoProducto = {
            id:uuidv4(), 
            nombre,
            precio,
            marca,
            linea,
            memoria,
            tipo
        }

        productos.push(nuevoProducto)

        res.json({
            success: true,
            response: 'Producto agregado correctamente'
        })
    }catch(ee){
        res.json({
            success: false,
            response: ee
        })
    }
    
}

const deleteProduct = (req,res) =>{
try{
    const id = req.params.id
    productos => productos.filter((producto)=>producto.id!==id)
    response.json({success:true,response: productos})
}catch(e){
response.json({success:false})
}
}

const editProduct = (req,res) =>{
    
}
const readProduct = (req,res) =>{
    res.json({
        success: true,
        response: productos
    })
}

module.exports = {addProduct,deleteProduct,editProduct,readProduct}