import express from "express";
const app = express()
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import connectDB from "./Db/connectDb.mjs";
import Post from "./models/Post.mjs"
import User from "./models/User.mjs"
import bcrypt from "bcryptjs"

const salt = bcrypt.genSaltSync(10)

const PORT = process.env.PORT || 4000
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors(corsOptions))


app.post("/register", async (req, res) => {
    try {
        const { useremail, username, userpassword } = req.body
        const userDoc = await User.create({
            useremail,
            username,
            // password
            userpassword: bcrypt.hashSync(userpassword, salt)
        })
        res.send({ hello: "world" })
    } catch (error) {
       res.status(400).json({ msg: { error } })
    }
})

// app.get("/register", async (req, res) => {

//     try {
//         const userDoc = await User.find()
//         res.json(userDoc)
//     } catch (error) {
//         res.status(400).json({ msg: { error } })
//     }

// })

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        console.log('connected to Db....');
        app.listen(PORT, () => console.log(`server is listening on port ${PORT}....`))
    } catch (error) {
        console.log(error);
    }
}

start()