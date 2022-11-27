import {Router,Request,Response} from 'express'

const router = Router()

router.post('/api/user',(req:Request,res:Response)=>{
    const name:string = req.body.name
    const email:string = req.body.email
    const password:string = req.body.password

    !name ? res.status(401).json({401:"unauthorized."}):
    !email ? res.status(401).json({401:"unauthorized"}):
    !password ? res.status(401).json({401:"unauthorized"}):
    res.status(201).json({201:'user created'})
})

router.get('/',(req:Request,res:Response)=>{
    res.status(200).json({message:'welcome to server Express'})
})


export default router