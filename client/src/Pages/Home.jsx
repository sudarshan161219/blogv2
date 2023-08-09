import React, { useEffect, useState, useRef, useCallback } from "react";
import { HomePage } from "../Components/export";
import Wrapper from "../assets/Wrappers/Home";
import { useAppContext } from "../context/Context";
import { SkeletonLoding, PageBtnContainer } from "../Components/export";
import usePosts from "../../hooks/usePosts";

const Home = () => {
  const [pageNum, setPageNum] = useState(1)
  const { isLoading, isError, error, results, hasNextPage } = usePosts(pageNum)


  const intObserver = useRef()
  const lastPostRef = useCallback(post => {
    if (isLoading) return

    if (intObserver.current) intObserver.current.disconnect()
    intObserver.current = new IntersectionObserver(posts => {
      if (posts[0].isIntersecting && hasNextPage) {
        console.log("we are near last post");
        setPageNum(prev => prev + 1)
      }
    })

    if (post) intObserver.current.observe(post)
  }, [isLoading, hasNextPage])


  if (isError) return <p>Error: {error.message}</p>

  const content = results.map((post, i) => {
    if (results.length === i + 1) {
      return <HomePage ref={lastPostRef} item={post} key={i} />
    }
    return <HomePage item={post} key={i} />

  })


  return (
    <Wrapper>
      {content}
    </Wrapper>
  );
}

export default Home;
