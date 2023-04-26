import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please title name"],
      minlength: 10,
    },
    summary: {
      type: String,
      required: [true, "Please provide Summary"],
      minlength: 10,
    },
    coverImg: {
      type: String,
    },
    content: {
      type: String,
      required: [true, "Please provide content"],
      // minlength: 50,
    },
    author: { type: Schema.Types.ObjectId, ref: "User" },
  },

  { timestamps: true }
);

const PostModel = model("Post", PostSchema);

export default PostModel;
