import ProductsManager from "./containers/productsManager.js"
import express from 'express'

const app = express()
const PORT = 8080;


const productService = new ProductsManager()
const getProducts = productService.getAllProducts()

const server = app.listen(PORT, () =>{
    console.log('I am listen from port')
})

app.get('/', (req, res) =>{
    res.send('En la URL agregale una /productos o /productoRandom si queires ver mas.')
})

app.get('/productos', async (req, res) =>{
    let result = await getProducts
    res.send(result)
})
