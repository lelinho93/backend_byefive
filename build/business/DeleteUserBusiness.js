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
exports.DeleteUserBusiness = void 0;
const DeleteUserDataBase_1 = require("../data/DeleteUserDataBase");
class DeleteUserBusiness {
    create(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deleteUserDataBase = new DeleteUserDataBase_1.DeleteUserDataBase();
                yield deleteUserDataBase.create(id);
                if (!id) {
                    throw new Error("Informe um id!");
                }
                yield deleteUserDataBase.create(id);
            }
            catch (error) {
                throw new Error(`Error on fetch: ${error.message}`);
            }
        });
    }
}
exports.DeleteUserBusiness = DeleteUserBusiness;
//# sourceMappingURL=DeleteUserBusiness.js.map