import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please title name"],
      maxlength: 50,
    },
    summary: {
      type: String,
      required: [true, "Please provide Summary"],
      maxlength: 100,
    },
    coverImg: {
      type: String,
    },
    content: {
      type: String,
      required: [true, "Please provide content"],
      minlength: 200,
    },
    author: { type: Schema.Types.ObjectId, ref: "User" },
  },

  { timestamps: true }
);

const PostModel = model("Post", PostSchema);

export default PostModel;
