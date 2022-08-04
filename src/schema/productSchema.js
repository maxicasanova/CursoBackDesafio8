import mongoose from "mongoose"

const ProductoEsquema = new mongoose.Schema({
    nombre:{type:String, required:true},
    descripcion:{type:String, required:true},
    codigo:{type:String, required:true},
    foto:{type:String, required:true},
    precio:{type:Number, required:true},
    stock:{type:Number, required:true},
}, {timestamps:{
        createdAt: 'created_at',
    }
})

export default ProductoEsquema