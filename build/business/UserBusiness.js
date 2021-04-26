"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBusiness = void 0;
const UserDataBase_1 = require("../data/UserDataBase");
const autheticator_1 = require("../service/autheticator");
const hashManager_1 = require("../service/hashManager");
class UserBusiness {
    create(name, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const hashManager = new hashManager_1.HashManager();
                const tokenManager = new autheticator_1.TokenManager();
                const userDataBase = new UserDataBase_1.UserDataBase();
                const hashPassword = yield hashManager.hash(password);
                if (!name || !email || !password) {
                    throw new Error("Todos os campos devem ser preenchidos!");
                }
                if (email.indexOf("@") === -1) {
                    throw new Error("Email inválido!");
                }
                if (password.length < 6) {
                    throw new Error("A senha deve ter mais que seis caracteres!");
                }
                yield userDataBase.create(name, email, hashPassword);
                const token = tokenManager.generate(email);
                return token;
            }
            catch (error) {
                throw new Error(`Error ao criar: ${error.message}`);
            }
        });
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const hashManager = new hashManager_1.HashManager();
                const tokenManager = new autheticator_1.TokenManager();
                const userDataBase = new UserDataBase_1.UserDataBase();
                if (!email || !password) {
                    throw new Error("Por favor preencha todos os campos!");
                }
                const userFromDB = yield userDataBase.getUserByEmail(email);
                if (!userFromDB) {
                    throw new Error("Usuário não encontrado!");
                }
                const passwordCheck = yield hashManager.compare(password, userFromDB.password);
                if (!passwordCheck) {
                    throw new Error("Erro ao fazer login!");
                }
                const token = tokenManager.generate(userFromDB.email);
                return token;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.UserBusiness = UserBusiness;
//# sourceMappingURL=UserBusiness.js.map