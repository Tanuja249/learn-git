import React from 'react'
import { useState } from 'react'

const Prev = () => {
 const [num, setNum] = useState({user:'Rishi',age:14})
  
 const btnClicked = () => {
    setNum (prev =>({...prev,age:50}))
 }
 const [anum, Setanum] = useState(10)
   const clickNow =()  => {
    Setanum(prev => (prev + 1))
    Setanum(prev => (prev + 1))
    Setanum(prev => (prev + 1))
   }
  return (
    <div>
           <div>
              <h1>{num.user}, {num.age}</h1>
              <button onClick={btnClicked}>click</button>
          </div>
               <div>
              <h1>{anum}</h1>
              <button onClick={clickNow}>click</button>
          </div>

    </div>
    
  )
}

export default Prev