import { Router } from "express";
import ProductsService from "../containers/productManager.js"

const productService  = new ProductsService();
const router = Router();

///GET '/api/products' -> devuelve todos los products.

router.get('/',async(req,res)=>{
    // console.log(getAllProducts)
    let getAll = await productService.getAllProducts()
    res.send(getAll);
})

//GET '/api/products/:id' -> devuelve un product según su id.

router.get('/id',async(req,res)=>{
    let lista = await productService.getAllProducts()
    if (req.query.id > lista.length) {
        res.send("404 El valor pedido no existe")
    } else {
        let numero = req.query.id
        let obtenerId = await productService.getById(numero)
        res.send(obtenerId)
    }
})

//POST '/api/products' -> recibe y agrega un product.

router.post('/', async(req,res)=>{
    let product = req.body
    res.send({status:"success", message:"Product Added"})
    await productService.addPet(product)
})

//PUT '/api/products/:id' -> recibe y actualiza un product según su id.

router.put('/',async(req,res)=>{
    let product = req.body
    await productService.update(product)
})


//DELETE '/api/products/:id' -> elimina un product según su id.
router.delete('/',async(req,res)=>{
    let id = req.body
    res.send("Eliminado")
   await productService.deleteById(id.delete)
})


export default router;