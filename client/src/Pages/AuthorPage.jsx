import React, { useEffect } from "react";
import Wrapper from "../assets/Wrappers/AuthorPage";
import { useAppContext } from "../context/Context";
import { Link, useParams } from "react-router-dom";
const AuthorPage = () => {
  const { getAuthorPage, authorPage } = useAppContext();
  const { id } = useParams();
  useEffect(() => {
    getAuthorPage(id);
  }, [authorPage]);

  return (
    <Wrapper>
      <h1>AuthorPage</h1>
    </Wrapper>
  );
};

export default AuthorPage;
