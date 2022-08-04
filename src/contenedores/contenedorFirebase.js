import admin from "firebase-admin";
import config from "../../config.js";

admin.initializeApp({
    credential: admin.credential.cert(config.firebase)
});

const db = admin.firestore()

class ContenedorFireBase {
    constructor(nombreColeccion){
        this.collection = db.collection(nombreColeccion);
        };
    
    async save(obj) {
        try {
            const doc = this.collection.doc();
            await doc.create(obj);
            console.log('se creo el objeto')
        } catch (error) {
            console.log(`No se ha podido guardar el objeto: ${error}`);
        }
    }
    async getById(id){
        try {
            const doc = this.collection.doc(id);
            const item = await doc.get();
            const res = {...item.data(), id};
            if(item){
                    console.log(`Se encontro el objeto: ${res.id}`);
                    return res;
                } else {
                    return null;
                }
        } catch (error) {
            console.log(`No se encontro el objeto: ${error}`);
        }
    }
    async getAll(){
        try{
            const data = await this.collection.get()
            const elements = data.docs.map(doc => ({id: doc.id, ...doc.data()}));
            return elements;
        } catch (error) {
            console.log(`No se encontro el objeto: ${error}`);
        }
    }
    async update(id, obj){
        try {
            const doc = this.collection.doc(id);
            const item = await doc.update({...obj});
            console.log(`Se actualizo el objeto con el siguiente ID: ${item.id}`);
        } catch (error) {
            console.log(`No se ha podido guardar el objeto: ${error}`);
        }
    }
    async deleteById(id){
        try {
            const doc = this.collection.doc(id);
            const item = await doc.delete();
            console.log(`Se elimino el objeto con el siguiente ID: ${id}`);
        } catch (error) {
            console.log(`No se ha podido eliminar el objeto: ${error}`);
        }
    }
}

export default ContenedorFireBase;