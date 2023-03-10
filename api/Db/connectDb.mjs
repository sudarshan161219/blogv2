import mongoose from "mongoose";

const connectDB = (uri) => {
return mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useCreateIndex: true
})
}

export default  connectDB

// module.exports = 