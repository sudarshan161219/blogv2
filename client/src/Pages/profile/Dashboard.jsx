import React, { useEffect } from 'react'
import Wrapper from '../../assets/Wrappers/Dashboard'
import { AiOutlineEye } from "react-icons/ai"
import { GoPencil } from "react-icons/go"
import { useAppContext } from '../../context/Context'
import loading from "../../assets/Rolling-0.7s-157px.svg"

const Dashboard = () => {
  const { getUserStats, mostViewedPosts, totalAuthorPosts, totalViews, statsLoading } = useAppContext()

  useEffect(() => {
    getUserStats()
  }, [])


  return (
    <Wrapper>
      <h1>Dashboard</h1>
      <div className="stats-container">
        <div className="total-views-container">
          <strong>total views</strong>
          <div className='dash-stats'>
            <AiOutlineEye />
            {statsLoading ? <img className='dashloading' src={loading} alt="loading...." /> : <span>{totalViews}</span>}
          </div>
        </div>
        <div className="total-posts-container">
          <strong>total posts</strong>
          <div className='dash-stats'>
            <GoPencil />
            {statsLoading ? <img className='dashloading' src={loading} alt="loading...." /> : <span>{totalAuthorPosts}</span>}
          </div>
        </div>
        <div className="most-viewed-article-container">
          <strong>Most viewed articles </strong>
          {statsLoading ? <img className='dashloading' src={loading} alt="loading...." /> : mostViewedPosts.map((item, idx) => <>
          <span key={idx}>{item.title}</span>
          </>)}
        </div>
      </div>
      {/* chart */}
    </Wrapper>
  )
}

export default Dashboard