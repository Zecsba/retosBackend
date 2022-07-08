// const PetManager = require('./containers/petManager.js')
import ProductsManager from "./containers/productsManager.js"

// Importar la clase, NO SIGINIFICA INSTANCIARLA

const productService = new ProductsManager()

const enviroment = async() =>{
    console.log('Get products')
    let pets = await productService.getAllProducts()
    console.log(pets)
    
    console.log('Add product')
   
    let producto = {
        name: 'Cuaderno',
        precio: "10.000"
    }

    // let id = 3
    // let deleteById = 2

    await productService.addPet(producto)
    // await productService.getById(id)
    // await productService.deleteById(deleteById)

    // await productService.deleteAll()
}

enviroment()