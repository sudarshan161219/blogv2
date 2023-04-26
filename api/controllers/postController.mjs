import Post from "../models/Post.mjs";
import User from "../models/User.mjs";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnauthenticatedError } from "../errors/export.mjs";

const createPost = async (req, res) => {
  const { title, summary, coverImg, content } = req.body;

  if (!title || !summary || !coverImg) {
    throw new BadRequestError("please provide all values");
  }

  const user = await User.findOne({ _id: req.user.userId });

  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  // const postAlreadyExist = await Post.aggregate({
  //   title
  // });

  // if (postAlreadyExist) {
  //   throw new BadRequestError("you have already have post with same title");
  // }

  req.body.author = req.user.userId;
  const post = await Post.create(req.body);
  return res.status(StatusCodes.CREATED).json({
    post,
  });
};

const getAllPost = async (req, res) => {
  const posts = await Post.find()
    .populate("author", ["name"])
    .sort({ createdAt: -1 })
    .limit(20);
  return res.status(StatusCodes.OK).json({
    posts,
  });
};

const authorPosts = async (req, res) => {
  const user = await User.findById({ _id: req.user.userId });
  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const authorpost = await Post.find({ author: req.user.userId })
    .populate("author", ["name"])
    .sort({ createdAt: -1 })
    .limit(20);
  return res.status(StatusCodes.OK).json({
    authorpost,
  });
};

const getSinglePost = async (req, res) => {
  return res.send("get single post");
};

const editPost = async (req, res) => {
  return res.send("edit single post");
};

const deletePost = async (req, res) => {
  return res.send("delete post");
};

export {
  createPost,
  getAllPost,
  authorPosts,
  getSinglePost,
  editPost,
  deletePost,
};
