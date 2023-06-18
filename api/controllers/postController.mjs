import Post from "../models/Post.mjs";
import User from "../models/User.mjs";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  UnauthenticatedError,
  NotFoundError,
} from "../errors/export.mjs";
import checkPermissions from "../utils/checkPermissions.mjs";

const getAllPost = async (req, res) => {
  return res.send("get all post");
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


export { getAllPost, tagsSearch };