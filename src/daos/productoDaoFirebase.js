import ContenedorFirebase from "../contenedores/contenedorFirebase.js";

class ProductoDaoFirebase extends ContenedorFirebase {
    constructor(){
        super("productos")
    }
}


export default ProductoDaoFirebase