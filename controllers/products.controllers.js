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