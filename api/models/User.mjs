import mongoose from "mongoose";
const { Schema, model } = mongoose


const UserSchema = new Schema({
    useremail: {
        type: String,
        required: [true, "must have email"],
    },
    username: {
        type: String,
        required: [true, "must have name"],
        trim: true,
        unique: true,
        maxlength: [15, 'name can not be more than 15 characters']
    },

    userpassword: {
        type: String,
        required: true,
    }
})


const UserModel = model('User', UserSchema)

export default UserModel