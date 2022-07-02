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
            }
        } catch (error) {
            console.log('Cannot write file: ' + error)
        }
    }
}

module.exports = PetManager;