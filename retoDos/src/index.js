const PetManager = require('./containers/petManager.js')
// Importar la clase, NO SIGINIFICA INSTANCIARLA

const petService = new PetManager()

const enviroment = async() =>{
    console.log('Get pets')
    let pets = await petService.getAllPets()
    console.log(pets)
    
    console.log('Add pets')
   
    let pet = {
        name: 'Orejitas',
        especie: 'Gato'
    }

    let id = 3
    let deleteById = 2

    await petService.addPet(pet)
    await petService.getById(id)
    await petService.deleteById(deleteById)

    // await petService.deleteAll()
}

enviroment()