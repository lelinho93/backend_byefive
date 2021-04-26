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
exports.GetAllUsersController = void 0;
const GetAllUsersBusiness_1 = require("../business/GetAllUsersBusiness");
class GetAllUsersController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const getAllUsersBusiness = new GetAllUsersBusiness_1.GetAllUserBusiness();
            try {
                const result = yield getAllUsersBusiness.create();
                res.status(200).send(result);
            }
            catch (error) {
                res.status(400).send({ message: error.message });
            }
        });
    }
}
exports.GetAllUsersController = GetAllUsersController;
//# sourceMappingURL=GetAllUsersController.js.map