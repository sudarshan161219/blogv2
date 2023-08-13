import { useState, useRef, useCallback } from "react";
import { HomePage } from "../Components/export";
import Wrapper from "../assets/Wrappers/Home";
import { SkeletonLoding } from "../Components/export";
import usePosts from "../../hooks/usePosts.js";


const Home = () => {
  const [pageNum, setPageNum] = useState(1)
  const {
    isLoading, isError, error, results, hasNextPage
  } = usePosts(pageNum)


  const intObserver = useRef()
  const lastPostRef = useCallback(post => {
    if (isLoading) return

    if (intObserver.current) intObserver.current.disconnect()
    intObserver.current = new IntersectionObserver(posts => {
      if (posts[0].isIntersecting && hasNextPage) {
        setPageNum(prev => prev + 1)
      }
    })

    if (post) intObserver.current.observe(post)
  }, [isLoading, hasNextPage])


  const content = results.map((post, i) => {
    if (results.length === i + 1) {
      return <HomePage ref={lastPostRef} item={post} key={i} />
    }
    return <HomePage item={post} key={i} />
  })


  return (
    <Wrapper>
        {content}
        {isLoading &&  <SkeletonLoding />}
    </Wrapper>
  );
}

export default Home;
