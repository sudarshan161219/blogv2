import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please title name"],
      minlength: 10,
    },
    // summary: {
    //   type: String,
    //   required: [true, "Please provide Summary"],
    //   minlength: 10,
    // },
    coverImg: {
      type: String,
    },
    content: {
      type: String,
      required: [true, "Please provide content"],
    },
    postTags: {
      type: Array,
      // unique:false
    },

    category: {
      type: String,
      // enum: [
      //   "Food",
      //   "Travel",
      //   "Lifestyle",
      //   "Fashion&beauty",
      //   "Photography",
      //   "Personal",
      //   "DIY craft",
      //   "Parenting",
      //   "Music",
      //   "Business",
      //   "Art&design",
      //   "Book&writing",
      //   "Personal-finance",
      //   "Interior-design",
      //   "Sports",
      //   "News",
      //   "Movie",
      //   "Religion",
      //   "Political",
      //   "technology",
      //   "Minimalism",
      //   "Other",
      // ],
      // unique:false
    },

    // SearchCategory:{
    //   type: String,
    // },
    author: { type: Schema.Types.ObjectId, ref: "User" },
  },

  { timestamps: true }
);

const PostModel = model("Post", PostSchema);

export default PostModel;
