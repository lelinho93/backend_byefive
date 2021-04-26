import dotenv from 'dotenv'

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const postsRoutes = require('./routes/router')


//************************Config************************* */

const app = express()

app.use(bodyParser.json())

dotenv.config()

const cors = require("cors")

app.use(cors({ origin: 'http://uneven-stamp.surge.sh'}))

app.use((req: any, res: any, next: any) => {
    res.header("Access-Control-Allow-Origin: http://localhost:3000")    
    next()
})


//**********************DB Connection******************** */

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected!'))
.catch((error: any) => console.log(error))

//********************** Routes **************************** */

app.use("/api", postsRoutes)


//************************Server************************** */

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is running in http://localhost:${PORT}`))