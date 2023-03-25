import Post from "../models/Post.mjs";

const createPost = async (req, res) => {
  return res.send("create post")
};

const getSinglePost = async (req, res) => {
  return res.send("get single post")
};

const getAllPost = async (req, res) => {
  return res.send("get all post")
};

const editPost = async (req, res) => {
  return res.send("edit single post")
};

const deletePost = async (req, res) => {
  return res.send("delete post")
};

export {createPost, getAllPost, getSinglePost, editPost, deletePost}
