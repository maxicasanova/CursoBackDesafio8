import ContenedorMongo from "../contenedores/contenedorMongo.js";
import ProductoEsquema from "../schema/productSchema.js";

class ProductoDAOmongo extends ContenedorMongo {
    constructor(){
        super("producto",ProductoEsquema)
    }
}


export default ProductoDAOmongo