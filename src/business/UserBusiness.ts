import { UserDataBase } from '../data/UserDataBase'
import { user } from '../models/User'
import { TokenManager } from '../service/autheticator'
import { HashManager } from '../service/hashManager'

export class UserBusiness {

    async create(name: string, email: string, password: string): Promise<string> {

        try {
            const hashManager = new HashManager()
            const tokenManager = new TokenManager()
            const userDataBase = new UserDataBase()

            const hashPassword = await hashManager.hash(password)

            if(!name || !email || !password){
                throw new Error("Todos os campos devem ser preenchidos!")
            }

            if(email.indexOf("@") === -1){
                throw new Error("Email inválido!")
            }

            if(password.length < 6){
                throw new Error("A senha deve ter mais que seis caracteres!")
            }

            await userDataBase.create(name, email, hashPassword)

            const token = tokenManager.generate(email)

            return token
            
        } catch (error) {
            throw new Error(`Error ao criar: ${error.message}`)
        }
    }
    async login(email:string, password: string): Promise<string> {
        try {
            const hashManager = new HashManager()
            const tokenManager = new TokenManager()
            const userDataBase = new UserDataBase()

            if(!email || !password){

                throw new Error("Por favor preencha todos os campos!")
            }

            const userFromDB: user = await userDataBase.getUserByEmail(email)
            if(!userFromDB){
                throw new Error ("Usuário não encontrado!")
            }

            const passwordCheck = await hashManager.compare(password, userFromDB.password )
            if(!passwordCheck){
                throw new Error("Erro ao fazer login!")
            }

            const token = tokenManager.generate(userFromDB.email)
            return token

        } catch (error) {
            throw new Error(error.message)
        }
    }
}