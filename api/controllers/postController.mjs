import Post from "../models/Post.mjs";
import User from "../models/User.mjs";
import Comment from "../models/Comments.mjs"
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
  ]).populate("comments")


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
  const { search, sort, category, tag, author } = req.query;

  const user = await User.find();

  const queryObject = {
    author: user,
  };

  // //$ add stuff based on condition
  if (category) {
    queryObject.category = { $regex: category, $options: "i" };
  }

  if (search) {
    queryObject.title = { $regex: search, $options: "i" };
  }

  // //$  in progrss
  if (tag) {
    queryObject.postTags = tag;
  }

  //$ no Await
  let result = Post.find(queryObject);

  // //$chain sort condition
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
  const post = await result;

  const totalPosts = await Post.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalPosts / limit);

  return res.status(StatusCodes.OK).json({
    post,
    totalPosts,
    numOfPages,
  });
};


// const likePost = async (req, res) => {
//   const { postId, userId } = req.body;

//   const user = await User.findOne({ _id: userId });

//   if (!user) {
//     throw new UnauthenticatedError(
//       "Login or Sign Up for like, comment the post"
//     );
//   }

//   const likedPost = Post.findByIdAndUpdate(
//     postId,
//     {
//       $push: { likes: userId },
//     },
//     { new: true }
//   );

//   res.status(StatusCodes.OK).json(likedPost);
// };


export { getAllPost, tagsSearch, getPost, getAuthorPage,   };
