import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {
 const [data, setData] = useState([])

 
const getData = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')

  setData(response.data)
  
}



  return (
    <div>
      <button onClick={getData}>GET DATA</button>

      <div>
        {data.map(function(user){
          return <h3>{user.name}</h3>
        })}
      </div>
    </div>
  )
}

export default App