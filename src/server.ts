import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
// import cors from 'cors'
// import morgan from 'morgan'
// import routes from './router'
// import cookieParser from 'cookie-parser'

dotenv.config()
const app = express()

// middlware
// app.use(cors())
// app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded())
// app.use(cookieParser())

//database
// const URI = process.env.MONGO_URL
// mongoose.connect(URI, {
//     autoIndex: false
// }, (err) => {
//     if (err) throw err
//     console.log("Mongoose Connection.")
// })


// app.set('view engine', 'ejs')

// // Routes
// app.use('/', routes)

app.get('/', (req, res) => {
    res.send({ msg: "Hello world" })
})

// Start server listening
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Express is listening on port http://localhost:${port}`)
})