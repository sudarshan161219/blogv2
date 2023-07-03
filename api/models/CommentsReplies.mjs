import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ReplySchema = new Schema(
  {
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
    repliedComment: { type: String },
    replieAuthor: { type: Schema.Types.ObjectId, ref: "User" },
    postCommentId: { type: Schema.Types.ObjectId, ref: "Post" },
  },
  { timestamps: true }
);

const CommentReply = model("CommentReply", ReplySchema);

export default CommentReply;
