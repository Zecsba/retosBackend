import { Router } from "express";
import { uploader } from "../utils.js"

const router = Router()

const pets = []

router.get('/', (req, res) =>{
    res.send('You stay in this moment in Pets')
})

router.post('/', uploader.single('file'), (req, res) =>{
    let pet = req.body;
    console.log(req.body)
    console.log(req.file)
    console.log(pet)
    if(!pet.name) return res.status(400).send({status: 'error', error:'Invalid input'})
    pets.push(pet)
    res.send({status:"success", message:"pet added"})
})

router.put('/', (req, res) =>{
    
})

router.delete('/', (req, res) =>{
    
})


export default router;