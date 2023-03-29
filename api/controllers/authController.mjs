import { StatusCodes } from "http-status-codes";
import User from "../models/User.mjs";
import { BadRequestError } from "../errors/export.mjs";

//* post register
const register = async (req, res) => {
  const { email, name, password } = req.body;


  if (!email || !name || !password) {
    throw new BadRequestError("Please provide all values");
  }

  const userAlreadyExist = await User.findOne({
    email
  });

  if (userAlreadyExist) {
    throw new BadRequestError("Email already in use");
  }



  const user = await User.create({ email, name, password });
  const token = user.createJWT();
  return res.status(StatusCodes.CREATED).json({
    user: {
      name: user.name,
      email: user.email,
    },
    token
  });
};

//* post login
const login = async (req, res, next) => {
  return res.send({ fn: "login" });
};

//* get profile
const profile = async (req, res) => {
  return res.send({ fn: " user profile" });
};

//* PATCH req
const updateUser = async (req, res) => {
  return res.send({ fn: "update user" });
};

// * post logout
const logout = async (req, res) => {
  return res.send({ fn: "logout user" });
};

export { register, login, updateUser, profile,  logout };
