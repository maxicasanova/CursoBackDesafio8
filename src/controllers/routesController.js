import { CarritoDAO } from "../daos/switchDao.js";
import { ProductoDAO } from "../daos/switchDao.js";

const getProducts = async (req, res) => {
    try{
        const list = await ProductoDAO.getAll();
        res.json(list);
    } catch (e){
        console.log(e)
        res.sendStatus(500);
    }
};

const postProduct = async (req, res) => {
    const obj = req.body;
    console.log(obj)
    try {
        const prod = await ProductoDAO.save(obj);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.send('Ocurrio un error');
    }
}

const getProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const prod = await ProductoDAO.getById(id);
        res.json(prod)
    } catch (error) {
        console.log(error);
        res.send('Ocurrio un error');
    }
}

const putProduct = async (req, res) => {
    const id = req.params.id;
    const obj = req.body;
    try {
        await ProductoDAO.update(id, obj);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.send('Ocurrio un error');
    }
}

const deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        await ProductoDAO.deleteById(id);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.send('Ocurrio un error');
    }
}

const postCarrito = async (req, res) => {
    const obj = req.body;
    try {
        await CarritoDAO.save(obj);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.send('Ocurrio un error');
    }
}

const deleteCarrito = async (req, res) => {
    const id = req.params.id;
    try {
        await CarritoDAO.deleteById(id);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.send('Ocurrio un error');
    }
}

const getProdCarrito = async (req, res) => {
    const id = req.params.id;
    try {
        const cart = await CarritoDAO.getById(id);
        res.json(cart.productos);
    } catch (error) {
        console.log(error);
        res.send('Ocurrio un error');
    }
}

const postProdCarrito =  async (req, res) => {
    const id = req.params.id;
    const id_prod = req.params.id_prod;
    try {
        const prod = await ProductoDAO.getById(id_prod)
        const productos = await CarritoDAO.getById(id).productos
        const obj = {productos : [...productos, prod]}
        await CarritoDAO.update(id, obj);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.send('Ocurrio un error');
    }
}

const deleteProdCarrito = async (req, res) => {
    const id = req.params.id;
    const id_prod = req.params.id_prod;

    try {
        const cart = await CarritoDAO.find(id);
        const productos = cart.productos.filter(p => p.id !== id_prod);
        await CarritoDAO.update(id, {productos});
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.send('Ocurrio un error');
    }
}

export {
    getProducts,
    postProduct,
    getProduct,
    putProduct,
    deleteProduct,
    postCarrito,
    deleteCarrito,
    getProdCarrito,
    postProdCarrito,
    deleteProdCarrito
}
