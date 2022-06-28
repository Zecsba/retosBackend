class Usuario{
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = []
        this.mascotas = []
        
    }
    
    getFullName = function(){
        console.log(`Tu nombre completo es: ${this.nombre} ${this.apellido}`)
    }
    
    addMascotas = function(mascota){
        this.mascotas.push(mascota)
    }
 
    countMascotas = function(){
        console.log(`Tengo ${this.mascotas.length} mascotas`)
    }

    addBook = function(libro, autor){
        this.libros.push({
            libro: libro,
            autor: autor
        })

        console.log(this.libros)
    }

    getBooksNames = function(){
        let names = this.libros.map(function(name){
            return `${name.libro}`
        })

        console.log(names)
    }
}

// Se creo nuevo usuario y se le agrego nombre y apellido
    const usuario1 = new Usuario('Sebastian', ' Casallas' )
    usuario1.getFullName() // Llamo el metodo para mostrar el nombre del usuario

// El usuario agrego libros y los autores
    usuario1.addBook('Harry Potter', 'J. K. Rowling')
    usuario1.addBook('Caperucita Roja', 'Charles Perrault')

// La cantiad de mascotas que tiene este usuario
    usuario1.addMascotas('Sasha')
    usuario1.addMascotas('Tobi')

    usuario1.countMascotas() // Llamo el metodo para contar los bichos
    usuario1.getBooksNames() // Llamo el metodo para ver nombres