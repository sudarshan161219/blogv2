import express from "express";
const app = express()
import dotenv from "dotenv"
dotenv.config()
import 'express-async-errors';
import cors from "cors"
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
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

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: false, limit: '50mb'}));
app.use(cors(corsOptions))
app.use(express.static(path.resolve(__dirname, "../client/dist")));




//* api routes
app.use("/api", authRoute)
app.use("/api",   postRoute)


//* HTTP GET Request
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
});

// app.get("/", (req, res) => {
// res.send("Home")
// });

//* Middlewares
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const start = async () => {
    try {
        await connectDB(uri )
        console.log('connected to Db....');
        app.listen(PORT, () => console.log(`server is listening on port http://localhost:${PORT}`))
    } catch (error) {
        console.log(error);
    }
}

start()