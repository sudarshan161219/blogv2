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
    minlength: [6, "Password should have min lenght of 6 char"],
    select: false,
  },

  profileImg: {
    type: String,
  },

  userInfo: {
    type: String,
    minlength: [5, "info  should have min lenght of 6 char"],
  },

  twitter: { type: String },
  instagram: { type: String },
  linkden: { type: String },
});

//* saving documents
UserSchema.pre("save", async function () {
  if(!this.isModified('password'))return
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});


//* creating jwt token
UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.ACCESS_TOKEN_KEY, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

const UserModel = model("User", UserSchema);

export default UserModel;
