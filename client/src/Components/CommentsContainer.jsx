import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import { useAppContext } from "../context/Context";
const CommentsContainer = () => {
  const { comments, getComments, formLoading } = useAppContext();
  const { id } = useParams();


  useEffect(() => {
    getComments(id);
  }, [id, formLoading]);


  return (
    <>
      {comments.map((item, idx) => (
        <Comments idx={idx}  comment={item} key={item._id} />
      ))}
    </>
  );
};

export default CommentsContainer;
