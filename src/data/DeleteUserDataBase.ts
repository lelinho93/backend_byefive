const Users = require('../models/Posts')

export class DeleteUserDataBase {

    async create(_id: string) {

        const deleteUser = new Users({_id})

        try {
            if(!deleteUser){
                throw new Error('Post not found!')
            }

            const result = await Users.findByIdAndDelete({_id})
                               
            return result        
            
        } catch (error) {
            throw new Error(error.message)
        }
    }
}