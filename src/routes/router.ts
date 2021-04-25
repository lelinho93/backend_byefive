import express from 'express'
import { Request, Response } from 'express'
import { UserController } from '../../src/controller/UserController'
import { GetAllUsersController } from '../controller/GetAllUsersController'

const router = express.Router()
const Posts = require('../../src/models/Posts')


router.get('/user/all', new GetAllUsersController().create)

router.post('/signup', new UserController().create)
router.post('/login', new UserController().login)



router.delete('/delete/:id', async (req: Request, res: Response) => {
    try {
        const post = await Posts.findByIdAndDelete(req.params.id)
        if(!post) throw new Error('Post not found!')
        res.status(200).json({ sucess: true})
    } catch (error) {
        res.status(400).json({message: error})
    }
})
module.exports = router;