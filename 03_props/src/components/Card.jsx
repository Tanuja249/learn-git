import React from 'react'

const Card = (props) => {

    
  return (
    
    <div className="App">
      <img src={props.img} alt="Profile Image" />
      <h1>{props.user},{props.age}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit provident quidem voluptas.</p>
      <button>View Profile</button>
    </div>

  )
}

export default Card