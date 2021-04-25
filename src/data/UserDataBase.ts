import { user } from "../models/User"

const Users = require('../models/Posts')


export class UserDataBase  {

    async create(name: string, email: string, password: string) {  
        
        const newUser = new Users({
            name,
            email,
            password
        })      
        try {
            if(!newUser) throw new Error("Something went wrong while saving the post")

            await newUser.save()         
            
            
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async getUserByEmail(email: string): Promise<user> {

        try {
            const result = await Users.findOne({email})
            

            if(!result){
                throw new Error("Usuário não encontrado em nosssa base de dados!")
            }

            return {
                name: result.name,
                email: result.email,
                password: result.password
            }
            
        } catch (error) {
            throw new Error(error.message)
        }
    }
}