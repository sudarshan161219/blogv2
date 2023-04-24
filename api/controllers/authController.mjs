import { StatusCodes } from "http-status-codes";
import User from "../models/User.mjs";
import { BadRequestError, UnauthenticatedError } from "../errors/export.mjs";

//* post register
const register = async (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    throw new BadRequestError("Please provide all values");
  }

  const userAlreadyExist = await User.findOne({
    email,
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
    token,
  });
};

//* post login
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  user.password = undefined;
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const token = user.createJWT();

  return res.status(StatusCodes.OK).json({ user, token });
};

//* PATCH req
const updateUser = async (req, res) => {
  const {
    name,
    userProfile,
    userInfo,
    personalLink,
    twitter,
    instagram,
    linkden,
  } = req.body;

  const user = await User.findOne({ _id: req.user.userId });

  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  (user.name = name),
    userInfo && (user.userInfo = userInfo),
    userProfile && (user.userImg = userProfile);
  (user.twitter = twitter),
    (user.personalLink = personalLink),
    (user.instagram = instagram),
    (user.linkden = linkden),
    await user.save();
  const token = user.createJWT();

  return res.status(StatusCodes.OK).json({
    user,
    token,
  });
};

//* get profile
const profile = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  return res.status(StatusCodes.OK).json({
    user,
  });
};

// * post logout
const logout = async (req, res) => {
  return res.send({ fn: "logout user" });
};

export { register, login, updateUser, profile, logout };
