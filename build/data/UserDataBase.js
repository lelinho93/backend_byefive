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
exports.UserDataBase = void 0;
const Users = require('../models/Posts');
class UserDataBase {
    create(name, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = new Users({
                name,
                email,
                password
            });
            try {
                if (!newUser)
                    throw new Error("Something went wrong while saving the post");
                yield newUser.save();
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield Users.findOne({ email });
                if (!result) {
                    throw new Error("Usuário não encontrado em nosssa base de dados!");
                }
                return {
                    name: result.name,
                    email: result.email,
                    password: result.password
                };
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.UserDataBase = UserDataBase;
//# sourceMappingURL=UserDataBase.js.map