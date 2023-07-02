import Post from "../models/Post.mjs";
import User from "../models/User.mjs";
import Comment from "../models/Comments.mjs";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  UnauthenticatedError,
  NotFoundError,
} from "../errors/export.mjs";
import checkPermissions from "../utils/checkPermissions.mjs";
import mongoose from "mongoose";
const { Types } = mongoose;


const createPost = async (req, res) => {
  const { title, coverImg, content, postTags, category } = req.body;
  if (!title || !coverImg || !content || !postTags || !category) {
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

const authorPosts = async (req, res) => {
  const { search, sort, category, tag } = req.query;

  const queryObject = {
    author: req.user.userId,
  };

  const user = await User.findById({ _id: req.user.userId });

  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  //$ add stuff based on condition
  if (category !== "all") {
    queryObject.category = category;
  }

  if (search) {
    queryObject.title = { $regex: search, $options: "i" };
  }

  //$ no Await
  let result = Post.find(queryObject);

  //$chain sort condition
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

  const authorpost = await result;

  const totalPosts = await Post.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalPosts / limit);

  return res.status(StatusCodes.OK).json({
    authorpost,
    totalPosts,
    numOfPages,
  });
};

const getSinglePost = async (req, res) => {
  const { id: postId } = req.params;
  const singlepost = await Post.findById({ _id: postId });

  if (!singlepost) {
    throw new NotFoundError(`No post with id : ${postId}`);
  }

  checkPermissions(req.user, singlepost.author);
  res.status(StatusCodes.OK).json({ singlepost });
};

const editPost = async (req, res) => {
  const { id: postId } = req.params;
  const post = await Post.findById({ _id: postId });
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

const likePost = async (req, res) => {
  const { id: postId } = req.params;
  const user = await User.findOne({ _id: req.user.userId });

  if (!user) {
    throw new UnauthenticatedError(
      "Login or Sign Up for like, comment the post"
    );
  }

  const like_dislike_Post = await Post.findByIdAndUpdate(
    { _id: postId },
    {
      $push: { likes: req.user.userId },
    },
    { new: true }
  );

  res.status(StatusCodes.OK).json({ like_dislike_Post });
};

const unLikePost = async (req, res) => {
  const { id: postId } = req.params;
  const user = await User.findOne({ _id: req.user.userId });

  if (!user) {
    throw new UnauthenticatedError(
      "Login or Sign Up for like, comment the post"
    );
  }

  const like_dislike_Post = await Post.findByIdAndUpdate(
    { _id: postId },
    {
      $pull: { likes: req.user.userId },
    },
    { new: true }
  );

  res.status(StatusCodes.OK).json({ like_dislike_Post });
};

const disLikePost = async (req, res) => {
  const { id: postId } = req.params;
  const user = await User.findOne({ _id: req.user.userId });

  if (!user) {
    throw new UnauthenticatedError(
      "Login or Sign Up for like, comment the post"
    );
  }

  const like_dislike_Post = await Post.findByIdAndUpdate(
    { _id: postId },
    {
      $push: { dislikes: req.user.userId },
    },
    { new: true }
  );

  res.status(StatusCodes.OK).json({ like_dislike_Post });
};

const disUnLikePost = async (req, res) => {
  const { id: postId } = req.params;
  const user = await User.findOne({ _id: req.user.userId });

  if (!user) {
    throw new UnauthenticatedError(
      "Login or Sign Up for like, comment the post"
    );
  }

  const like_dislike_Post = await Post.findByIdAndUpdate(
    { _id: postId },
    {
      $pull: { dislikes: req.user.userId },
    },
    { new: true }
  );

  res.status(StatusCodes.OK).json({ like_dislike_Post });
};

//$ get save post
const likedPosts = async (req, res) => {
  const queryObject = {
    likes: req.user.userId,
  };

  const user = await User.findById({ _id: req.user.userId });

  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  //$ no Await
  let result = await Post.find(queryObject);
  res.status(StatusCodes.OK).json({ result });
};

//$ put save post
const savepost = async (req, res) => {
  const { id: postId } = req.params;
  const user = await User.findOne({ _id: req.user.userId });

  if (!user) {
    throw new UnauthenticatedError(
      "Login or Sign Up for like, comment the post"
    );
  }

  const save_Post = await Post.findByIdAndUpdate(
    { _id: postId },
    {
      $push: { savepost: req.user.userId },
    },
    { new: true }
  );

  res.status(StatusCodes.OK).json({ save_Post });
};

//$ put unsave post
const unsavepost = async (req, res) => {
  const { id: postId } = req.params;
  const user = await User.findOne({ _id: req.user.userId });

  if (!user) {
    throw new UnauthenticatedError(
      "Login or Sign Up for like, comment the post"
    );
  }

  const save_Post = await Post.findByIdAndUpdate(
    { _id: postId },
    {
      $pull: { savepost: req.user.userId },
    },
    { new: true }
  );

  res.status(StatusCodes.OK).json({ save_Post });
};

//$ get saved post
const getSavedPosts = async (req, res) => {
  const queryObject = {
    savepost: req.user.userId,
  };

  const user = await User.findById({ _id: req.user.userId });

  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  let result = await Post.find(queryObject);
  res.status(StatusCodes.OK).json({ result });
};

//?  Create Comment
const createComment = async (req, res) => {
  const { userId, postId, content } = req.body;
  if (!postId || !content) {
    throw new BadRequestError("please provide all values");
  }
  const user = await User.findOne({ _id: req.user.userId });

  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  req.body.author = req.user.userId;
  req.body.postComment = postId;

  const comment = await Comment.create(req.body);

  const save_post_comment = await Post.findByIdAndUpdate(
    { _id: postId },
    {
      $push: { comments: comment },
    },
    { new: true }
  );

  return res.status(StatusCodes.CREATED).json({
    comment,
    save_post_comment,
  });
};

//?  Create Reply Comment
const createReplyComment = async (req, res) => {
  const { id, content } = req.body;
  const user = await User.findOne({ _id: req.user.userId });

  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  const aurthorID = req.user.userId;

  const comment_relpy = await Comment.findByIdAndUpdate(
    { _id: id },
    {
      $push: { repiles: { repileauthor: aurthorID, repileComment: content } },
    },
    { new: true }
  );

  return res.status(StatusCodes.CREATED).json({
    comment_relpy,
  });
};

//? get comments
const getComments = async (req, res) => {
  const { id } = req.params;

  const queryObject = {
    postComment: id,
  };
  let comments = await Comment.find(queryObject).populate("author", [
    "name",
    "userImg",
  ]);

  let commentLikes = await Comment.aggregate([
    { $project: { count: { $size: "$likes" } } },
  ]);


  let commentDisLikes = await Comment.aggregate([
    { $project: { count: { $size: "$dislikes" } } },
  ]);

  res.status(StatusCodes.OK).json({ comments, commentLikes, commentDisLikes });
};

//? like Comment
const likeComment = async (req, res) => {
  const { id: commentId } = req.params;
  const user = await User.findOne({ _id: req.user.userId });

  if (!user) {
    throw new UnauthenticatedError(
      "Login or Sign Up for like, comment the post"
    );
  }

  const like_dislike_comment = await Comment.findByIdAndUpdate(
    { _id: commentId },
    {
      $push: { likes: req.user.userId },
    },
    { new: true }
  );

  let commentLikes = await Comment.aggregate([
    { $project: { count: { $size: "$likes" } } },
  ]);

  res.status(StatusCodes.OK).json({ like_dislike_comment, commentLikes });
};

//? unlike Comment
const unLikeComment = async (req, res) => {
  const { id: commentId } = req.params;
  const user = await User.findOne({ _id: req.user.userId });

  if (!user) {
    throw new UnauthenticatedError(
      "Login or Sign Up for like, comment the post"
    );
  }

  const like_dislike_comment = await Comment.findByIdAndUpdate(
    { _id: commentId },
    {
      $pull: { likes: req.user.userId },
    },
    { new: true }
  );

  let commentLikes = await Comment.aggregate([
    { $project: { count: { $size: "$likes" } } },
  ]);


  res.status(StatusCodes.OK).json({ like_dislike_comment, commentLikes });
};

const dislikeComment = async (req, res) => {
  const { id: commentId } = req.params;
  const user = await User.findOne({ _id: req.user.userId });

  if (!user) {
    throw new UnauthenticatedError(
      "Login or Sign Up for like, comment the post"
    );
  }

  const like_dislike_comment = await Comment.findByIdAndUpdate(
    { _id: commentId },
    {
      $push: { dislikes: req.user.userId },
    },
    { new: true }
  );

  let commentDisLikes = await Comment.aggregate([
    { $project: { count: { $size: "$dislikes" } } },
  ]);

  res.status(StatusCodes.OK).json({ like_dislike_comment, commentDisLikes });
};

//? undislike Comment
const unDislikeComment = async (req, res) => {
  const { id: commentId } = req.params;
  const user = await User.findOne({ _id: req.user.userId });

  if (!user) {
    throw new UnauthenticatedError(
      "Login or Sign Up for like, comment the post"
    );
  }

  const like_dislike_comment = await Comment.findByIdAndUpdate(
    { _id: commentId },
    {
      $pull: { dislikes: req.user.userId },
    },
    { new: true }
  );

  let commentDisLikes = await Comment.aggregate([
    { $project: { count: { $size: "$dislikes" } } },
  ]);


  res.status(StatusCodes.OK).json({ like_dislike_comment , commentDisLikes});
};

export {
  createPost,
  authorPosts,
  getSinglePost,
  editPost,
  deletePost,
  likePost,
  unLikePost,
  disLikePost,
  disUnLikePost,
  likedPosts,
  savepost,
  unsavepost,
  getSavedPosts,
  createComment,
  createReplyComment,
  getComments,
  likeComment,
  unLikeComment,
  dislikeComment,
  unDislikeComment,
};
