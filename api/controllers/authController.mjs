import User from "../models/User.mjs";
import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);
import Jwt from "jsonwebtoken";

const generateAccessToken = (username, userDoc) => {
  return Jwt.sign({ username, id: userDoc._id }, process.env.ACCESS_TOKEN_KEY, {
    expiresIn: "30s",
  });
};

const generateRefreshToken = (username, userDoc) => {
  return Jwt.sign(
    { username, id: userDoc._id },
    process.env.REFRESH_TOKEN_KEY,
    { expiresIn: "1d" }
  );
};

//* post register
const register = async (req, res, next) => {
  try {
    const { useremail, username, userpassword } = req.body;
    await User.create({
      useremail,
      username,
      userpassword: bcrypt.hashSync(userpassword, salt),
    });
    res.status(201).json({ msg: "User successfuly registered" });
  } catch (error) {
    // res.status(400).json({ msg: { error } });
    next(error)
  }
};

//* post login
const login = async (req, res, next) => {
  try {
    const { username, userpassword } = req.body;
    const userDoc = await User.findOne({ username });
    const passOk = bcrypt.compareSync(userpassword, userDoc.userpassword);
    const userOk = username === userDoc.username;

    if (passOk === false) {
      res.status(400);
    }

    if (passOk && userOk) {
      const accessToken = generateAccessToken(username, userDoc);
      const refreshToken = generateRefreshToken(username, userDoc);

      const update = { usertoken: refreshToken };
      await User.findOneAndUpdate(update);

      res.json({
        id: userDoc._id,
        name: username,
        accessToken,
        refreshToken,
      });
    } else {
      res.json({ msg: "err in login " }).status(400);
    }
  } catch (error) {
    next(error)
  }
};

//* get profile
const profile = async (req, res) => {
  Jwt.verify(req.token, process.env.ACCESS_TOKEN_KEY, (err, authData) => {
    if (err) throw err;
    res.json({ token: authData });
  });
};

function verifyToken(req, res, next) {
  const bearerHeader = req.headers.authorization;
  if (bearerHeader) {
    const bearer = bearerHeader.split("  ");
    const token = bearer[1];
    req.token = token;
    next();
  } else {
    res.send({ msg: "invalid token" });
  }
}

//* PATCH req
const updateUser = async (req, res) => {
  return res.send({ fn: "update user" });
};

// * post logout
const logout = async (req, res) => {
  const refreshToken = req.body.token;
  // const deleteToken = { : refreshToken }
  await User.findOneAndUpdate({ usertoken: "" });
  res.status(200).json("logout");
};

export { register, login, updateUser, profile, verifyToken, logout };
