import fs from "fs"

const path = "./src/public/base/products.json"
class ProductsManager{ // Class contenedora, gestiona multiples products
    getAllProducts = async() =>{
        try {
            if(fs.existsSync(path)){
                let fileData = await fs.promises.readFile(path, 'utf-8')
                let products = JSON.parse(fileData)
                return products;
            }else{
                return [];
            }
        } catch (error) {
            console.log('There is a error: ' + error)
        }
    }

    addPet = async(product) =>{
        try {
            let products = await this.getAllProducts()
            if(products.length === 0){ // There aren't no products
                product.id=1;
                products.push(product);
                await fs.promises.writeFile(path, JSON.stringify(products, null, '\t'))
            }else{
                product.id = products[products.length-1].id+1;
                products.push(product);
                await fs.promises.writeFile(path, JSON.stringify(products, null, '\t'))
                console.log(`El producto ${product.name} tiene un id y es: ${product.id}`)
            }
        } catch (error) {
            console.log('Cannot write file: ' + error)
        }
    }

    getById = async(id) => {
        try {
            let objetId = await this.getAllProducts()
            const filtrar = objetId.find((item) =>{
                if(id == item.id){
                    return item
                }else{
                    return null
                }
            })

            return console.log("GetByID: ", filtrar)
        } catch (error) {
            console.log('No find ID: ', error)
        }
    }

    deleteById = async(id) =>{
        try{
            let eliminar = await this.getAllProducts()
            const eliminate = eliminar.filter((item) =>{
                if(id != item.id){
                    return item
                }else{
                    return null
                }
            })
            const nuevoArray = fs.promises.writeFile(path, JSON.stringify(eliminate, null, '\t'))
            console.log("deletByID: Producto eliminado correctamente")
            return nuevoArray
        }catch(error){
            console.log('Cannot eliminate ID: ' ,error)
        }
    }

    update = async(obj) =>{
        let updating = await this.getAllProducts()
        let id = obj.id;
        let titulo = obj.title;
        let price = obj.prices;
        let imagenURL = obj.imagenURL;
        updating .map(function(dato){
            if(dato.id == id){
                dato.title = titulo;
                dato.prices = price;
                dato.imagenURL = imagenURL;
            }
        })
        await fs.promises.writeFile(path,JSON.stringify(updating ,null,'\t'));
        console.log(updating )
        return updating ;
    }

    deleteAll = async() => {
        try{
            await fs.promises.writeFile(path, '[]')
        } catch (error) {
            console.log(error)
        }
    }
}

export default ProductsManager