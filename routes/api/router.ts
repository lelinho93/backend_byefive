import express from 'express'
import { Request, Response } from 'express'
import { UserController } from '../../src/controller/UserController'

const router = express.Router()
const Posts = require('../../src/models/Posts')

router.get('/', async (req: Request, res: Response) => {
    try {

        const posts = await Posts.find()
        if(!posts) throw new Error("No items")

        res.status(200).json(posts)

    } catch (error) {

        res.status(400).json({message: error})
        
    }
})

router.post('/signup', new UserController().create)
router.post('/login', new UserController().login)



router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const post = await Posts.findByIdAndDelete(req.params.id)
        if(!post) throw new Error('Post not found!')
        res.status(200).json({ sucess: true})
    } catch (error) {
        res.status(400).json({message: error})
    }
})
module.exports = router;
