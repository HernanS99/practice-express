let productos = []

const addProduct = (req,res) =>{
    productos.push(req.body)
    try{
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