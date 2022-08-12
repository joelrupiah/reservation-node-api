import express, { json } from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import cookieParser from "cookie-parser"

const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("connected to mongodb")
    } catch (error) {
        throw error
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("mongodb disconected")
})

mongoose.connection.on("connected", () => {
    console.log("mongodb conected")
})

//MIDDLEWARES START

app.use(cookieParser()) // for storing token in cookie

app.use(express.json()) // to send json data

app.use('/auth', authRoute)
app.use('/users', usersRoute)
app.use('/hotels', hotelsRoute)
app.use('/rooms', roomsRoute)

// Error handling middleware

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

// MIDDLEWARES END

app.listen(4800, () => {
    connect()
    console.log("Running nodejs express framework")
})
