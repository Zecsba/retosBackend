// Importaciones Importantes
import express from 'express'
import __dirname from "./utils.js";

// RUTAS
import productsRouter from './routes/products.js'

const app = express()

const server = app.listen(8080, ()=>console.log('Ahora escuchando en el puerto 8080'))

app.use(express.json())
app.use('/api/products', productsRouter);
app.use(express.static(__dirname+'/public'))