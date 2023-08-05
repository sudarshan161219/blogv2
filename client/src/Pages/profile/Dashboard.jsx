import React from 'react'
import Wrapper from '../../assets/Wrappers/Dashboard'
import { AiOutlineEye } from "react-icons/ai"
import { GoPencil } from "react-icons/go"

const Dashboard = () => {
  return (
    <Wrapper>
      <h1>Dashboard</h1>
      <div className="stats-container">
        <div className="total-views-container">
          <strong>total views</strong>
          <div className='dash-stats'>
            <AiOutlineEye />
            <span>215k</span>
          </div>
        </div>
        <div className="total-posts-container">
          <strong>total posts</strong>
          <div className='dash-stats'>
            <GoPencil />
            <span>215k</span>
          </div>
        </div>
        <div className="most-viewed-article-container">
          <strong>Most viewed article </strong>
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ab nulla culpa accusantium, consectetur nostrum.</span>
        </div>
      </div>
{/* chart */}
    </Wrapper>
  )
}

export default Dashboard