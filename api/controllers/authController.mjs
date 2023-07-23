import { StatusCodes } from "http-status-codes";
import User from "../models/User.mjs";
import { BadRequestError, UnauthenticatedError } from "../errors/export.mjs";
import jwt from "jsonwebtoken";

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

  return res.status(StatusCodes.CREATED).json({
    user: {
      name: user.name,
      email: user.email,
    },
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

  const Access_Token = user.createAccess_TokenJWT();
  const Refresh_Token = user.createRefresh_TokenJWT();

  res.cookie("jwt", Refresh_Token, {
    httpOnly: true, //accessible only by web server
    secure: true, //https
    sameSite: "None", //cross-site cookie
    maxAge: 7 * 24 * 60 * 60 * 1000, //cookie expiry: set to match rT
  });

  return res.status(StatusCodes.OK).json({ user, Access_Token });
};

const refreshToken = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) return res.status(401).json({ message: "Unauthorized" });

  const refresh_Token = cookies.jwt;

  jwt.verify(
    refresh_Token,
    process.env.REFRESH_TOKEN_SECRET,
    async (err, user) => {
      if (err) return res.sendStatus(403);
      const { userId } = user;
      const userr = await User.findOne({ userId });
      const Access_Token = userr.createAccess_TokenJWT();
      return res.status(StatusCodes.OK).json({ userr, Access_Token });
    }
  );
};

//* PATCH req
const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(
    { _id: req.user.userId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
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
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); //No content
  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
  res.json({ message: "Cookie cleared" });
};

export { register, login, updateUser, profile, logout, refreshToken };
