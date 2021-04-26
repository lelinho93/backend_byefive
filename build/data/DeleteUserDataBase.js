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
exports.DeleteUserDataBase = void 0;
const Users = require('../models/Posts');
class DeleteUserDataBase {
    create(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteUser = new Users({ _id });
            try {
                if (!deleteUser) {
                    throw new Error('Post not found!');
                }
                const result = yield Users.findByIdAndDelete({ _id });
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.DeleteUserDataBase = DeleteUserDataBase;
//# sourceMappingURL=DeleteUserDataBase.js.map