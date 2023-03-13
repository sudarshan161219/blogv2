import express from "express";
const app = express()
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import connectDB from "./Db/connectDb.mjs";
import Post from "./models/Post.mjs"
import User from "./models/User.mjs"
import bcrypt from "bcryptjs"
import Jwt from "jsonwebtoken";

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
            userpassword: bcrypt.hashSync(userpassword, salt)
        })
        res.send({ hello: "world" })
    } catch (error) {
        res.status(400).json({ msg: { error } })
    }
})



app.post("/login", async (req, res) => {
    try {
        const { username, userpassword } = req.body
        const userDoc = await User.findOne({
            username
        })
        const passOk = bcrypt.compareSync(userpassword, userDoc.userpassword)

        if (!passOk) {
            return res.json({ errMsg: "password does't match" }).status(400)
        }

        const accessToken = Jwt.sign({ username, id: userDoc._id },
            process.env.ACCESS_TOKEN_KEY,
            { expiresIn: '1d' })


        const refreshToken = Jwt.sign({ username, id: userDoc._id },
            process.env.REFRESH_TOKEN_KEY,
            { expiresIn: '1d' })


        const currentUser = { username, refreshToken }
        res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
        res.json({ accessToken })

    } catch (error) {
        res.status(400).json({ msg: "yeno gadul agyda" })
    }
})



app.get("/profile", verifyToken, async (req, res) => {
    Jwt.verify(req.token, process.env.PRIATEKEY, (err, authData) => {
        if (err) throw err;
        res.json(authData)
    })
})


function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization']
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ")
        const token = bearer[1]
        req.token = token;
        next()
    } else {
        res.send({ msg: "invalid token" })
    }
}

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