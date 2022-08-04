import express, { json, urlencoded } from 'express';

import router from './routes/index.js';

const app = express();
// require("dotenv").config();
let port = process.env.PORT || 8080;

app.use(json());
app.use(urlencoded({extended: true}))

app.use('/api', router);

app.use((req, res) => {
    res.status(404).send("No pudimos encontrar la dirección");
})

app.use((err, req, res) => {
    console.error(err);
    res.status(500).send("Ocurrió un error");
})

app.listen(port, err => {
    if (err) {
        console.log(`Hubo un error al inciar el servidor : ${err}`);
    } else {
        console.log(`Servidor escuchando el puerto: ${port}`);
    }
})