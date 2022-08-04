let ProductoDAO
let CarritoDAO

import CarritoDaoFirebase from './carritoDaoFirebase.js'
import CarritoDaoMongo from './carritoDaoMongo.js'
import ProductoDaoFirebase from './productoDaoFirebase.js'
import ProductoDaoMongo from './productoDaoMongo.js'
import dotenv from 'dotenv'

dotenv.config()

switch (process.env.DB) {
    case 'mongo':
        ProductoDAO = new ProductoDaoMongo()
        CarritoDAO = new CarritoDaoMongo()
        break;
    case 'firebase':
        ProductoDAO = new ProductoDaoFirebase()
        CarritoDAO = new CarritoDaoFirebase()
        break;
    default:
        break;
}

export {ProductoDAO, CarritoDAO}