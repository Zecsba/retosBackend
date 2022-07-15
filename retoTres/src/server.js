import ProductsManager from "./containers/productsManager.js"
import express from 'express'

const app = express()
const PORT = 8080;

app.use(express.json())

const productService = new ProductsManager()
const getProducts = productService.getAllProducts()

console.log('Este es el arreglo', getProducts)

const server = app.listen(PORT, () =>{
    console.log('I am listen from port')
})

app.get('/', (req, res) =>{
    res.send('En la URL agregale una /productos o /productoRandom si queires ver mas.')
})

app.get('/productosRandom', async (req, res) =>{
    const resultados = await getProducts;
    const random = Math.floor(Math.random() * resultados.length)
    const randomProduct = resultados[random]
    res.send(randomProduct)
})

app.get('/productos', async (req, res) =>{
    let result = await getProducts
    res.send(write(result))
})

function write (products){
    let boxProducts = ''

    for (const product of products) {
        boxProducts += `
        <div> 
            <h1>Nombre: ${product.name}</h1>
            <h2>Precio: ${product.price}</h2>
            <span>ID: ${product.id}</span>
        </div>
        <hr>
        `
    }
    return boxProducts;
}