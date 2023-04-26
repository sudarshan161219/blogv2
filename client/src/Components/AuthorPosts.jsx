import React from "react";

const AuthorPosts = ({ item }) => {
const {title, summary, coverImg, content} = item

  return (
    <div>
    <h1 className='post-heading'>{title}</h1>
    <div
      className='content'
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
  )
};

export default AuthorPosts;
