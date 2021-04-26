const Users = require('../models/Posts')

export class GetAllUsersDataBase {

    async create(): Promise<any> {
        
        try {
            const result = await Users.find()
            
            return result

        } catch (error) {            
            throw new Error(error.message)
        }
    }
}