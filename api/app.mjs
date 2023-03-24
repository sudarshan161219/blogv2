import express from "express";
const app = express()
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import connectDB from "./Db/connectDb.mjs";
import cookieParser from "cookie-parser";
import router from "./route/route.mjs";

//* middleware imports
import notFoundMiddleware from "./middlewares/not-found.mjs";
import errorHandlerMiddleware from "./middlewares/error-handler.mjs";

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

//* HTTP GET Request
app.get("/", (req, res) => {
    res.status(201).json("Home")
})

//* api routes
app.use("/api", router)


//* Middlewares
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        console.log('connected to Db....');
        app.listen(PORT, () => console.log(`server is listening on port http://localhost:${PORT}`))
    } catch (error) {
        console.log(error);
    }
}

start()