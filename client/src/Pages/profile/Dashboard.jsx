import React, { useEffect } from 'react'
import Wrapper from '../../assets/Wrappers/Dashboard'
import { AiOutlineEye } from "react-icons/ai"
import { GoPencil } from "react-icons/go"
import { useAppContext } from '../../context/Context'
import loading from "../../assets/Rolling-0.7s-157px.svg"
import {Link} from "react-router-dom"
const Dashboard = () => {
  const { getUserStats, mostViewedPosts, totalAuthorPosts, totalViews, totalAuthorViews, statsLoading } = useAppContext()

  useEffect(() => {
    getUserStats()
  }, [])


  return (
    <Wrapper>
      <h1>Dashboard</h1>
      <div className="stats-container">
        <div className="total-views-container">
          <strong>total post views</strong>
          <div className='dash-stats'>
            <AiOutlineEye />
            {statsLoading ? <img className='dashloading' src={loading} alt="loading...." /> : <span>{totalViews}</span>}
          </div>
        </div>
        <div className="total-views-container">
          <strong>total  profile visits</strong>
          <div className='dash-stats'>
            <AiOutlineEye />
            {statsLoading ? <img className='dashloading' src={loading} alt="loading...." /> : <span>{totalAuthorViews}</span>}
          </div>
        </div>
        <div className="total-posts-container">
          <strong>total posts</strong>
          <div className='dash-stats'>
            <GoPencil />
            {statsLoading ? <img className='dashloading' src={loading} alt="loading...." /> : <span>{totalAuthorPosts}</span>}
          </div>
        </div>

      </div>
      <div className='most-viewed-container'>
        <div className="most-viewed-article-container">
          <strong>Most viewed articles </strong>
          {statsLoading ? <img className='dashloading' src={loading} alt="loading...." /> : mostViewedPosts.map((item, idx) => <>
            <Link className="Link" to={`${item.id}`} key={idx}>{item.title}</Link>
          </>)}
        </div>
      </div>
      {/* chart */}
    </Wrapper>
  )
}

export default Dashboard