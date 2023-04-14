import express from "express";
const app = express()
import dotenv from "dotenv"
dotenv.config()
import 'express-async-errors';
import cors from "cors"
import connectDB from "./Db/connectDb.mjs";
import authRoute from "./route/authRoute.mjs";
import postRoute from "./route/postRoute.mjs";

//* middleware imports
import notFoundMiddleware from "./middlewares/not-found.mjs";
import errorHandlerMiddleware from "./middlewares/error-handler.mjs";
import auth from "./middlewares/auth.mjs"

const PORT = process.env.PORT || 4000
const uri = process.env.MONGO_URI


const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}


app.use(express.json())
app.use(cors(corsOptions))


//* HTTP GET Request
app.get("/", (req, res) => {
    res.send("Home")
})

//* api routes
app.use("/api", authRoute)
app.use("/api",  auth, postRoute)

//* Middlewares
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const start = async () => {
    try {
        await connectDB(uri )
        console.log('connected to Db....');
        app.listen(PORT, () => console.log(`server is listening on port http://localhost:4000`))
    } catch (error) {
        console.log(error);
    }
}

start()