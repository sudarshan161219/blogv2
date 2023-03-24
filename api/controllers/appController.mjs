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
const register = async (req, res) => {
  try {
    const { useremail, username, userpassword } = req.body;
 await User.create({
      useremail,
      username,
      userpassword: bcrypt.hashSync(userpassword, salt),
    });
    res.status(201).json({msg: "User successfuly registered"})
  } catch (error) {
    res.status(400).json({ msg: { error } });
  }
};

//* post login
const login = async (req, res) => {
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
    res.status(400).json({ msg: "yeno gadul agyda" });
  }
};

//* post refresh
const refresh = async (req, res) => {
  try {
    // take the refresh toke from the user
    const { username } = req.body;
    const refreshtoken = req.body.token;
    const userDoc = await User.findOne({ username });
    const userOk = username === userDoc.username;

    // send err if there is no token or it's invalid
    if (!refreshtoken) {
      return res.status(401).json("You are not authenticated!");
    }

    if (!userOk) {
      return res.status(403).json("Refresh token is not valid!");
    }

    Jwt.verify(
      userDoc.usertoken,
      process.env.REFRESH_TOKEN_KEY,
      async (err, data) => {
        if (err) throw err;

        //$ if everthing is ok , create new access token, refresh token and send to user
        const newAccessToken = generateAccessToken(data, userDoc.id);
        const newRefreshToken = generateRefreshToken(data, userDoc.id);
        const update = { usertoken: newRefreshToken };
        await User.findOneAndUpdate(update);

        res.status(200).json({
          accessToken: newAccessToken,
          refreshtoken: newRefreshToken,
        });
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//* get profile
const profile = async (req, res) => {
  Jwt.verify(req.token, process.env.ACCESS_TOKEN_KEY, (err, authData) => {
    if (err) throw err;
    res.json({ token: authData });
  });
};


function verifyToken (req, res, next) {
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

// * post logout
const logout = async (req, res) => {
  const refreshToken = req.body.token;
  // const deleteToken = { : refreshToken }
  await User.findOneAndUpdate({ usertoken: "" });
  res.status(200).json("logout");
};

export { logout, login, refresh, register, profile, verifyToken };
