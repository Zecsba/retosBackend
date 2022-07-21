import { Router } from "express";


const router = Router();

router.get('/:categories', (req, res) =>{
    res.send('You stay in this moment in Products in the section of Categories')
})

router.post('/:categories', (req, res) =>{
    
})

router.put('/:categories', (req, res) =>{
    
})

router.delete('/:categories', (req, res) =>{
    
})


export default router