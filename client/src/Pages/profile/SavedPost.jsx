import React, { useEffect } from "react";
import { useAppContext } from "../../context/Context";

const SavedPost = () => {
  const { getSavedPost, token } = useAppContext();
  useEffect(() => {
    token !== "" ? getSavedPost() : null;
  }, []);
  return <div>SavedPost</div>;
};

export default SavedPost;
