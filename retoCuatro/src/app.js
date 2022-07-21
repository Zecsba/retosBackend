// Importaciones Importantes
import express from 'express'
import __dirname from "./utils.js";

// RUTAS
import usersRouter from './routes/users.router.js'
import productsRouter from './routes/products.router.js'
import petsRouter from './routes/pets.router.js'


const app = express()

const server = app.listen(8080, ()=>console.log('Ahora escuchando en el puerto 8080'))

app.use(express.json())

app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/pets', petsRouter);
app.use(express.static(__dirname+'/public'))