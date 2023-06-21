import React, { useEffect } from "react";
import { useAppContext } from "../context/Context";
import { Link, useParams } from "react-router-dom";
import Wrapper from "../assets/Wrappers/SinglePost";
const SinglePost = () => {
  const { getSinglePost } = useAppContext();
  const { id } = useParams();
  useEffect(() => {
    getSinglePost(id);
  }, [id]);
  return (
    <Wrapper>
      <div>SinglePost</div>
    </Wrapper>
  );
};

export default SinglePost;
