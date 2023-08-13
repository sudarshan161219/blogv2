import { useEffect, useState } from "react";
import { useAppContext } from "../src/context/Context";

const usePosts = (pageNum = 1) => {
  const { getPostApi } = useAppContext();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    setIsLoading(true);
    setIsError(false);
    setError({});

    getPostApi(pageNum, { signal })
      .then((data) => {
        const { allPosts } = data;
        setResults((prev) => [...prev, ...allPosts]);
        setHasNextPage(Boolean(allPosts.length));
          setIsLoading(false);
      })
      .catch((e) => {
        if (signal.aborted) return;
        setIsLoading(false);
        setIsError(true);
        setError({ msg: e.message });
      });

    return () => {
      controller.abort();
    };
  }, [pageNum]);;
  return { isLoading, isError, error, results, hasNextPage };
};

export default usePosts;
