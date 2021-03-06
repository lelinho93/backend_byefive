import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {

    async create(req: Request, res: Response) {
        const userBusiness = new UserBusiness()

        try {
            const name: string = req.body.name
            const email: string = req.body.email
            const password: string = req.body.password

            const token: string = await userBusiness.create(name, email, password)
            res.status(201).send({ token })

        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }
    async login(req: Request, res: Response) {
        const userBusiness = new UserBusiness()

        try {
            const email: string = req.body.email
            const password: string = req.body.password

            const token = await userBusiness.login(email, password)
            res.status(202).send({ token })
            
        } catch (error) {
            res.status(401).send({message: error.message})
        }
    }
}
    