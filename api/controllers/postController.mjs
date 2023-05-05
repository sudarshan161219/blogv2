import Post from "../models/Post.mjs";
import User from "../models/User.mjs";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnauthenticatedError, NotFoundError } from "../errors/export.mjs";
import checkPermissions from "../utils/checkPermissions.mjs";

const createPost = async (req, res) => {
  const { title, summary, coverImg, content , postTags} = req.body;
  if (!title || !summary || !coverImg || !content || !postTags ) {
    throw new BadRequestError("please provide all values");
  }

  const user = await User.findOne({ _id: req.user.userId });

  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

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

  // const authorpost = await Post.find({ author: req.user.userId })
  //   .populate("author", ["name"])
  //   .sort({ createdAt: -1 })
  //   .limit(20)
  return res.status(StatusCodes.OK).json({
    authorpost,
  });
};

const getSinglePost = async (req, res) => {
  const { id: postId } = req.params;
  const singlepost = await Post.findById({ _id: postId });

  if (!singlepost) {
    throw new NotFoundError(`No post with id : ${ postId}`);
  }

  checkPermissions(req.user, singlepost.author);
  res.status(StatusCodes.OK).json({ singlepost });
};

const editPost = async (req, res) => {
  const { id: postId } = req.params;
  const post = await Post.findById({ _id: postId });
  // const { title, summary, coverImg, content } = req.body;

  if (!post) {
    throw new NotFoundError(`No post with id : ${id}`);
  }

  checkPermissions(req.user, post.author);

  const updatedJob = await Post.findOneAndUpdate({ _id: postId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(StatusCodes.OK).json({ updatedJob });
};

const deletePost = async (req, res) => {
  const { id: postId } = req.params;
  const post = await Post.findById({ _id: postId });
  if (!post) {
    throw new NotFoundError(`No post with id : ${id}`);
  }
  checkPermissions(req.user, post.author);
  await Post.findByIdAndDelete({ _id: postId });
  res.status(StatusCodes.OK).json({ msg: "Success Post removed" });
};

export {
  createPost,
  getAllPost,
  authorPosts,
  getSinglePost,
  editPost,
  deletePost,
};