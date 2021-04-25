import dotenv from 'dotenv'

const express = require('express')
const mongoose = require('mongoose')
const { MONGO_URI } = require('./config')
const postsRoutes = require('../routes/api/router')


//************************Config************************* */

const app = express()

app.use(express.json())

dotenv.config()

const cors = require("cors")

app.use((req: any, res: any, next: any) => {
    res.header("Access-Control-Allow-Origin")
    app.use(cors())
    next()
})


//**********************DB Connection******************** */

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected!'))
.catch((error: any) => console.log(error))

//********************** Routes **************************** */

app.use(postsRoutes)


//************************Server************************** */

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is running in http://localhost:${PORT}`))