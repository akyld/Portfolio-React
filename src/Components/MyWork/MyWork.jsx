import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

function MyWork() {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, key) => {
          return <img key={key} src={work.w_img} />
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} />
      </div>
    </div>
  )
}

export default MyWork
