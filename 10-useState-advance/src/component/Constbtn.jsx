import React, { useState } from 'react'

const Constbtn = () => {

 const [num,Setnum] = useState({user:'Tanuja' ,age: 28})

 const btnClicked = ()=>{
 Setnum({user: 'abhinav', age:22})
 }

  return (
    <div>
        <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default Constbtn