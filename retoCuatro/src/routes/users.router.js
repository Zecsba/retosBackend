import { Router } from "express";

const router = Router()


router.get('/', (req, res) =>{
    res.send('You stay in this moment in Users')
})

router.post('/', (req, res) =>{
    
})

router.put('/:uid', (req, res) =>{
    
})

router.delete('/:uid', (req, res) =>{
    
})


export default router