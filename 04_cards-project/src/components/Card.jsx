import React from 'react'
import '../index.css'
const Card = (props) => {
  console.log(props.company);
  return (
    <div>
        <div className="card">
        <div className="top">
          <img src={props.brandLogo} sizes='40' alt="" />
          <button>Save <i className="fa-regular fa-bookmark"></i></button>
        </div>
          <div className="center">
            <h3>{props.company}<span>{props.datePosted}</span></h3>
            <h2>{props.post}</h2>
            <div className="tag">
              <h4>{props.tag1}</h4>
              <h4>{props.tag2}</h4>
            </div>
          </div>
          <div className="bottom">
            
              <div>
                <h3>{props.pay}</h3>
                <p>{props.location}</p>
              </div>
              <button>Apply Now</button>
            
          </div>
      </div>
    </div>
  )
}

export default  Card