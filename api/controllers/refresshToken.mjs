import dotenv from "dotenv"
dotenv.config()
import Jwt from "jsonwebtoken";
import User from "./models/User.mjs"


const handleRefreshToken = (req, res) => {
const cookies = req.cookies
if(!cookies?.Jwt) return res.status(400)
console.log(cookies.jwt);
const refreshToken = cookies.Jwt

jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_KEY,
    (err, decode) => {
        if(err) throw err
        const accessToken = Jwt.sign(
            {"username": decode.username},
            process.env.ACCESS_TOKEN_KEY,
            { expiresIn: '1d' }
        )
        res.json({accessToken})
    }
)
}

export default handleRefreshToken