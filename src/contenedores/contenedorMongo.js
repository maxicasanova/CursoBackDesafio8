import config from '../../config.js'
import mongoose from "mongoose";

await mongoose.connect(config.mongodb.connectionString)

class ContenedorMongo {
    constructor(nombreColeccion, schema) {
        this.model = mongoose.model(nombreColeccion, schema);
    }
    async save(obj) {
        try {
            const model = new this.model(obj)
            await model.save()
            console.log(`Se agrego el objeto`);
        } catch (error) {
            console.log(`No se ha podido guardar el objeto: ${error}`);
        }
    }
    async getById(id){
        
        try {
            const data  = await this.model.findOne({_id:id})
            if(data){
                console.log(`Se encontro el objeto`);
                return data;
            } else {
                return null;
            }
        } catch (error) {
            console.log(`No se encontro el objeto: ${error}`);
        }
    }
    async getAll(){
        try{
            const data  = await this.model.find({})
            return data;
        } catch (error) {
            console.log(`No se encontro el objeto: ${error}`);
        }
    }
    async update(id, obj){
        try {
            await this.model.updateOne({id:id}, {$set:obj});
            console.log(`Se actualizo el objeto`);
        } catch (error) {
            console.log(`No se ha podido guardar el objeto: ${error}`);
        }
    }
    async deleteById(id){
        try {
            await this.model.deleteOne({id:id});
            console.log(`Se elimino el objeto`);
        } catch (error) {
            console.log(`No se ha podido eliminar el objeto: ${error}`);
        }
    }
}

export default ContenedorMongo;