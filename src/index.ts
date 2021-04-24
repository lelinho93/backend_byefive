const express = require('express')
import { Request, Response } from 'express'

const app = express()

app.get('/', (req: Request, res: Response) => {
    res.send("Hello Node!")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`))