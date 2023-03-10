import mongoose from "mongoose";
const { Schema, model } = mongoose


const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "must have name"],
        trim: true,
        unique: true,
        maxlength: [15, 'name can not be more than 15 characters']
    },
    email: String,
    password: {
        type: String,
        required: true,
    }
})


const UserModel = model('User', UserSchema)

export default UserModel