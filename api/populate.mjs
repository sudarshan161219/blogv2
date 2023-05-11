import { readFile } from "fs/promises";
import dotenv from "dotenv";
dotenv.config();

import connectDb from "./Db/connectDb.mjs";
import Post from "./models/Post.mjs";


const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    await Post.deleteMany();
    const jsonPost = JSON.parse(
      await readFile(new URL("./blog-data.json", import.meta.url))
    );
    await Post.create(jsonPost);
    console.log("Success!!!");
    process.exit(0)
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
};

start();
