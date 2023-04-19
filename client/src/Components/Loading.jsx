import React from 'react'
import load from "../assets/Rolling-1s-31px.svg"

const Loading = () => {
  return (
    <div className='loading'>
        <img className='loader' src={load} alt="loading..." />
    </div>
  )
}

export default Loading