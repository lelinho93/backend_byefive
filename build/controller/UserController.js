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
exports.UserController = void 0;
const UserBusiness_1 = require("../business/UserBusiness");
class UserController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userBusiness = new UserBusiness_1.UserBusiness();
            try {
                const name = req.body.name;
                const email = req.body.email;
                const password = req.body.password;
                const token = yield userBusiness.create(name, email, password);
                res.status(201).send({ token });
            }
            catch (error) {
                res.status(400).send({ message: error.message });
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userBusiness = new UserBusiness_1.UserBusiness();
            try {
                const email = req.body.email;
                const password = req.body.password;
                const token = yield userBusiness.login(email, password);
                res.status(202).send({ token });
            }
            catch (error) {
                res.status(401).send({ message: error.message });
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map