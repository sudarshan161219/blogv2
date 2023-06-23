import React from 'react'
import load from "../assets/Rolling-0.7s-157px.svg"

const Loading = () => {
  return (
    <div className='loading'>
        <img className='loader' src={load} alt="loading..." />
    </div>
  )
}

export default Loading