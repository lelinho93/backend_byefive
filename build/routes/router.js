"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = require("../../src/controller/UserController");
const DeleteUserController_1 = require("../controller/DeleteUserController");
const GetAllUsersController_1 = require("../controller/GetAllUsersController");
const router = express_1.default.Router();
router.get('/user/all', new GetAllUsersController_1.GetAllUsersController().create);
router.post('/signup', new UserController_1.UserController().create);
router.post('/login', new UserController_1.UserController().login);
router.delete('/user/delete/:id', new DeleteUserController_1.DeleteUserController().create);
module.exports = router;
//# sourceMappingURL=router.js.map