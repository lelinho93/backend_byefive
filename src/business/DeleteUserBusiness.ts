import { DeleteUserDataBase } from "../data/DeleteUserDataBase";

export class DeleteUserBusiness {

    async create(id: string): Promise<void> {

        try {
            const deleteUserDataBase = new DeleteUserDataBase()
            await deleteUserDataBase.create(id)

            if(!id){
                throw new Error("Informe um id!")
            }

            await deleteUserDataBase.create(id)
            
        } catch (error) {
            
            throw new Error(`Error on fetch: ${error.message}`)
        }
    }
}