import { Router } from "express";
import ProductsproductService from "../public/containers/index.js"
const productService  = new ProductsproductService();
const router = Router();

///GET '/api/productos' -> devuelve todos los productos.

router.get('/',async(req,res)=>{
    console.log(getAll)
    let getAll = await productService.getAll()
    res.send(getAll);
})

//GET '/api/productos/:id' -> devuelve un producto según su id.

router.get('/id',async(req,res)=>{
    let Lista = await productService.getAll()
    if (req.query.id > Lista.length) {
        res.send("404 El valor pedido no existe")
    } else {
        let numero = req.query.id
        let obtenerId = await productService.getById(numero)
        res.send(obtenerId)
    }
})

//POST '/api/productos' -> recibe y agrega un producto.

router.post('/',async(req,res)=>{
    let producto = req.body
    res.send({status:"success", message:"Product Added"})
    await productService.save(producto)
})

//PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.

router.put('/',async(req,res)=>{
    let producto = req.body
   await productService.actualizar(producto)
})


//DELETE '/api/productos/:id' -> elimina un producto según su id.
router.delete('/',async(req,res)=>{
    let id = req.body
    res.send("Eliminado")
   await productService.deleteById(id.delete)
})


export default router;