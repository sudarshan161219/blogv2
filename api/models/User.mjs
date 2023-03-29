import mongoose from "mongoose";
const { Schema, model } = mongoose;
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "must have name"],
    trim: true,
    unique: true,
    minlength: 3,
    maxlength: [20, "name can not be more than 20 characters"],
  },

  email: {
    type: String,
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
    unique: true,
    required: [true, "must have email"],
  },

 password: {
    type: String,
    required: true,
    minlength: 6,
    select: false,
  },
}); 

//* creating jwt token
UserSchema.pre("save", async function ()  {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
    return jwt.sign({userId: this._id}, process.env.ACCESS_TOKEN_KEY, {
        expiresIn: process.env.JWT_LIFETIME
    })
}


const UserModel = model("User", UserSchema);

export default UserModel;
