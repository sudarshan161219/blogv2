import React, { useEffect, useState } from "react";
import axios from "axios";
import { HomePage } from "../Components/export";
import Wrapper from "../assets/Wrappers/Home";
import { useAppContext } from "../context/Context";
import { SkeletonLoding, PageBtnContainer } from "../Components/export";


const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadedPosts, setLoadedPosts] = useState([]);
  const [hasMoreData, setHasMoreData] = useState(true);


  useEffect(() => {
    fetchData();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fetchData = async () => {
    if (!hasMoreData) return;

    try {
      const {data} = await axios.get(`/api/?page=${currentPage}&limit=5`);
      console.log(data);
      const {allPosts} = data
      // const newPosts = response.data.allPosts;
      // const totalPages = response.data.numOfPages;

      setLoadedPosts((prevPosts) => [...prevPosts, ...allPosts]);
      setCurrentPage((prevPage) => prevPage + 1);

      if (currentPage >= totalPages) {
        setHasMoreData(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleScroll = () => {
    const scrolledToBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

    if (scrolledToBottom) {
      fetchData();
    }
  };



  return (
    <Wrapper>
      {/* {isLoading ? (
        <SkeletonLoding />
      ) : ( */}
      <>
        {loadedPosts.map((item) => (
          <HomePage item={item} key={item._id} />
        ))}
        {hasMoreData && <p>Loading more...</p>}
        {!hasMoreData && <p>No more data</p>}

        {/* {numOfPages > 1 && <PageBtnContainer />} */}
      </>
      {/* )} */}
    </Wrapper>
  );
};

export default Home;
