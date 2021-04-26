import { Request, Response } from 'express'
import { DeleteUserBusiness } from '../business/DeleteUserBusiness'

export class DeleteUserController {

    async create(req: Request, res: Response) {
        const deleteUserBusiness = new DeleteUserBusiness()

        try {
            const id: string = req.body.id

            console.log(id)

            await deleteUserBusiness.create(id)

            
            res.status(200).send("Usuário deletado!") 
            
        } catch (error) {
            res.status(400).send({message: error.message}) 
                       
        }
    }
}