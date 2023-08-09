import { useEffect, useState } from "react";
// import  getPostsPage  from "../api/axios.js";
import { useAppContext } from "../src/context/Context";

const usePosts = (pageNum = 1) => {
  const {getPostApi} = useAppContext()
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    setError({});

    const controller = new AbortController();
    const { signal } = controller;

    getPostApi(pageNum, { signal })
      .then((data) => {
        const { numOfPages, allPosts } = data;
        setResults((prev) => [...prev, ...allPosts]);
        setHasNextPage(Boolean(allPosts.length));
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        if (signal.aborted) return;
        setIsError(true);
        setError({ msg: e.message });
      });

    return () => {
      controller.abort();
    };
  }, [pageNum]);
  return { isLoading, isError, error, results, hasNextPage };
};

export default usePosts;
