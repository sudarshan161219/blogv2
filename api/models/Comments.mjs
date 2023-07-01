import mongoose from "mongoose";
const { Schema, model } = mongoose;

const CommentsSchema = new Schema(
  {
    content: { type: String },
    repiles: [
      { repileComment: { type: String } },
      { repileauthor: { type: Schema.Types.ObjectId, ref: "User" } },
      { timestamps: true },
    ],
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    dislikes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    postComment: { type: Schema.Types.ObjectId, ref: "Post" },
    author: { type: Schema.Types.ObjectId, ref: "User" },
  },

  { timestamps: true }
);

const CommentModel = model("Comment", CommentsSchema);

export default CommentModel;
