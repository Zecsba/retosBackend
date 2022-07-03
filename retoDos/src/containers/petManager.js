const fs = require('fs')

const path = "./files/pets.json"

class PetManager{ // Class contenedora, gestiona multiples pets
    getAllPets = async() =>{
        try {
            if(fs.existsSync(path)){
                let fileData = await fs.promises.readFile(path, 'utf-8')
                let pets = JSON.parse(fileData)
                return pets;
            }else{
                return [];
            }
        } catch (error) {
            console.log('Hubo un error' + error)
        }
    }

    addPet = async(pet) =>{
        try {
            let pets = await this.getAllPets()
            if(pets.length === 0){ // There aren't no pets
                pet.id=1;
                pets.push(pet);
                await fs.promises.writeFile(path, JSON.stringify(pets, null, '\t'))
            }else{
                pet.id = pets[pets.length-1].id+1;
                pets.push(pet);
                await fs.promises.writeFile(path, JSON.stringify(pets, null, '\t'))
                console.log(`La mascota ${pet.name} tiene un id y es: ${pet.id}`)
            }
        } catch (error) {
            console.log('No se pudo escribir: ' + error)
        }
    }

    getById = async(id) => {
        try {
            let objetId = await this.getAllPets()
            const filtrar = objetId.find((item) =>{
                if(id == item.id){
                    return item
                }else{
                    return null
                }
            })

            return console.log("GetByID: ", filtrar)
        } catch (error) {
            console.log('No se encontro el id: ', error)
        }
    }

    deleteById = async(id) =>{
        try{
            let eliminar = await this.getAllPets()
            const eliminate = eliminar.filter((item) =>{
                if(id != item.id){
                    return item
                }else{
                    return null
                }
            })
            const nuevoArray = fs.promises.writeFile(path, JSON.stringify(eliminate, null, '\t'))
            console.log("deletByID: Mascota Eliminado correctamente")
            return nuevoArray
        }catch(error){
            console.log('No se puedo eliminar: ', error)
        }
    }

    deleteAll = async() => {
        try{
            await fs.promises.writeFile(path, '[]')
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = PetManager;