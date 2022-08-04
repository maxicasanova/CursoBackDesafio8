import CarritoEsquema from "../schema/cartSchema.js";
import contenedorMongo from "../contenedores/contenedorMongo.js";

class CarritoDAOmongo extends contenedorMongo {
    constructor(){
        super("carrito",CarritoEsquema)
    }
}


export default CarritoDAOmongo