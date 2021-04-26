import { Request, Response } from "express";
import { GetAllUserBusiness } from "../business/GetAllUsersBusiness";

export class GetAllUsersController {

    async create(req: Request, res: Response) {
        const getAllUsersBusiness = new GetAllUserBusiness()

        try {            
            const result = await getAllUsersBusiness.create()
            res.status(200).send(result)

        } catch (error) {            
            res.status(400).send({message: error.message})
        }
    }
}