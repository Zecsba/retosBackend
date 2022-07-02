const PetManager = require('./containers/petManager.js')
// Importar la clase, NO SIGINIFICA INSTANCIARLA

const petService = new PetManager()

const enviroment = async() =>{
    console.log('Opteniedo mascostas')
    let pets = await petService.getAllPets()
    console.log(pets)
    
    console.log('Añadiendo una mascota')
   
    let pet = {
        name: 'Panfilo',
        especie: 'Iguana'
    }

   await petService.addPet(pet)
}

enviroment()
