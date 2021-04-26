import { DeleteUserDataBase } from "../data/DeleteUserDataBase";

export class DeleteUserBusiness {

    async create(id: string): Promise<any> {

        try {
            const deleteUserDataBase = new DeleteUserDataBase()
            await deleteUserDataBase.create(id)

            if(!id){
                throw new Error("Informe um id!")
            }

            await deleteUserDataBase.create(id)
            
        } catch (error) {            
            throw new Error(`Erro ao deletar: ${error.message}`)
        }
    }
}