import { GetAllUsersDataBase } from "../data/GetAllUsersDataBase"


export class GetAllUserBusiness {

    async create(): Promise<any> {

        try {

            const getAllUserDataBase = new GetAllUsersDataBase()
            await getAllUserDataBase.create()

            const result = await getAllUserDataBase.create()

            return result
            
            
        } catch (error) {
            throw new Error(`Error ao criar: ${error.message}`)
        }
    }
}