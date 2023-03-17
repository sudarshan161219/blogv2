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
import cookieParser from "cookie-parser";


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
app.use(cookieParser())

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

const generateAccessToken = (username, userDoc) => {
    return Jwt.sign({ username, id: userDoc._id },
        process.env.ACCESS_TOKEN_KEY,
        { expiresIn: '30s' })
}


const generateRefreshToken = (username, userDoc) => {
    return Jwt.sign({ username, id: userDoc._id },
        process.env.REFRESH_TOKEN_KEY,
        { expiresIn: '1d' })
}

app.post("/login", async (req, res) => {

    try {
        const { username, userpassword } = req.body
        const userDoc = await User.findOne({ username })
        const passOk = bcrypt.compareSync(userpassword, userDoc.userpassword)
        const userOk = username === userDoc.username

        if (passOk === false) {
            res.status(400)
        }

        if (passOk && userOk) {

            const accessToken = generateAccessToken(username, userDoc)
            const refreshToken = generateRefreshToken(username, userDoc)

            const update = { usertoken: refreshToken }
            await User.findOneAndUpdate(update)

            res.json({
                id: userDoc._id,
                name: username,
                accessToken,
                refreshToken
            })

        } else {
            res.json({ msg: "err in login " }).status(400)
        }

    } catch (error) {
        res.status(400).json({ msg: "yeno gadul agyda" })
    }
})



app.post("/refresh", async (req, res) => {

    try {
        // take the refresh toke from the user
        const { username } = req.body
        const refreshtoken = req.body.token
        const userDoc = await User.findOne({ username })
        const userOk = username === userDoc.username


        // send err if there is no token or it's invalid
        if (!refreshtoken) {
            return res.status(401).json("You are not authenticated!")
        }

        if (!userOk) {
            return res.status(403).json("Refresh token is not valid!")
        }

        Jwt.verify(userDoc.usertoken, process.env.REFRESH_TOKEN_KEY, async (err, data) => {
            if (err) throw err;
            // if everthing is ok , create new access token, refresh token and send to user
            
            const newAccessToken = generateAccessToken(data, userDoc.id)
            const newRefreshToken = generateRefreshToken(data, userDoc.id)
            const update = { usertoken: newRefreshToken }
            await User.findOneAndUpdate(update)

            res.status(200).json({
                accessToken: newAccessToken,
                refreshtoken: newRefreshToken
            })
        })

    } catch (error) {
        console.log(error);
    }
})



app.get("/profile", verifyToken, async (req, res) => {
    Jwt.verify(req.token , process.env.ACCESS_TOKEN_KEY, (err, authData) => {
        if (err) throw err;
        res.json({ token: authData })
    })
})


function verifyToken(req, res, next) {
    const bearerHeader = req.headers.authorization
    if (bearerHeader) {
        const bearer = bearerHeader.split("  ")
        const token = bearer[1]
        req.token = token;
        next()
    } else {
        res.send({ msg: "invalid token" })
    }
}


app.post("/logout", verifyToken, async (req, res) => {
    const refreshToken = req.body.token;
    // const deleteToken = { : refreshToken }
    await User.findOneAndUpdate({usertoken: ""})

    res.status(200).json("logout")
})

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