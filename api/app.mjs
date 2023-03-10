import dotenv from "dotenv"
dotenv.config()

import  express  from "express";
import connectDB from "./Db/connectDb.mjs";


const app = express()

const PORT = process.env.PORT || 4000

app.use(express.urlencoded({extended: true}))
app.use(express.json())




const start = async () => {
try {
    await connectDB(process.env.MONGO_URI)
    console.log('connected to Db....');
    app.listen(PORT, () => console.log(`server is listening on port ${PORT}....`) )
} catch (error) {
    console.log(error);
}
}

start()