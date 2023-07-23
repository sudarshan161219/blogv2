import Post from "../models/Post.mjs";
import User from "../models/User.mjs";
import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  UnauthenticatedError,
  NotFoundError,
} from "../errors/export.mjs";
import checkPermissions from "../utils/checkPermissions.mjs";

const getAllPost = async (req, res) => {
  const allPosts = await Post.find()
    .populate("author", ["name"])
    .sort({ createdAt: -1 });
  //  .limit(20);
  const totalPosts = await Post.countDocuments(allPosts);
  return res.status(StatusCodes.OK).json({
    allPosts,
    totalPosts,
  });
};

const getPost = async (req, res) => {
  const { id: postId } = req.params;
  const singlepost = await Post.findById({ _id: postId }).populate("author", [
    "name",
  ]);

  if (!singlepost) {
    throw new NotFoundError(`No post with id : ${postId}`);
  }

  res.status(StatusCodes.OK).json({ singlepost });
};

const getAuthorPage = async (req, res) => {
  const { id: authorId } = req.params;
  const queryObject = {
    author: authorId,
  };
  const authorInfo = await User.findById({ _id: authorId });
  const authorPosts = await Post.find(queryObject).sort({ createdAt: -1 });
  res.status(StatusCodes.OK).json({ authorPosts, authorInfo });
};

const tagsSearch = async (req, res) => {
  const { search, sort, category, tag } = req.query;


  if (category !== "all") {
    req.body.category = { $regex: category, $options: "i" };
  }

  if (search) {
    req.body.title = { $regex: search, $options: "i" };
  }


  if (tag) {
    req.body.postTags = tag;
  }

  let result = Post.find(req.body);

  if (sort === "latest") {
    result = result.sort("-createdAt");
  }

  if (sort === "oldest") {
    result = result.sort("createdAt");
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;

  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);
  const postg = await result;

  const totalPostsg = await Post.countDocuments();
  const numOfPagesg = Math.ceil(totalPostsg / limit);

  return res.status(StatusCodes.OK).json({
    postg,
    totalPostsg,
    numOfPagesg,
  });
};

const refreshToken = async (req, res) => {
  // const cookies = req.cookies

  // if (!cookies?.jwt) return res.status(401).json({ message: 'Unauthorized' })

  // const refresh_Token = cookies.jwt

  // jwt.verify(refresh_Token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
  //   if (err) return res.sendStatus(403);
  //   const Access_Token = user.createAccess_TokenJWT();
  //   res.json({ Access_Token });
  // });
};

export { getAllPost, tagsSearch, getPost, getAuthorPage, refreshToken };
