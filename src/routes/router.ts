import express from 'express'
import { UserController } from '../../src/controller/UserController'
import { DeleteUserController } from '../controller/DeleteUserController'
import { GetAllUsersController } from '../controller/GetAllUsersController'

const router = express.Router()


router.get('/user/all', new GetAllUsersController().create)

router.post('/signup', new UserController().create)
router.post('/login', new UserController().login)

router.delete('/user/delete', new DeleteUserController().create)

module.exports = router;