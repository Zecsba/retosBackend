import fs from "fs"

const path = "./src/public/base/products.json"
class ProductsManager{ // Class contenedora, gestiona multiples pets
    getAllProducts = async() =>{
        try {
            if(fs.existsSync(path)){
                let fileData = await fs.promises.readFile(path, 'utf-8')
                let pets = JSON.parse(fileData)
                return pets;
            }else{
                return [];
            }
        } catch (error) {
            console.log('There is a error: ' + error)
        }
    }

    addPet = async(product) =>{
        try {
            let pets = await this.getAllProducts()
            if(pets.length === 0){ // There aren't no pets
                product.id=1;
                pets.push(product);
                await fs.promises.writeFile(path, JSON.stringify(pets, null, '\t'))
            }else{
                product.id = pets[pets.length-1].id+1;
                pets.push(product);
                await fs.promises.writeFile(path, JSON.stringify(pets, null, '\t'))
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
        let arr = await this.getAllProducts()
        let id = obj.id;
        let titulo = obj.title;
        let price = obj.prices;
        let thumbnail = obj.thumbnail;
        arr.map(function(dato){
            if(dato.id == id){
                dato.title = titulo;
                dato.prices = price;
                dato.thumbnail = thumbnail;
            }
        })
        await fs.promises.writeFile(path,JSON.stringify(arr,null,'\t'));
        console.log(arr)
        return arr;
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