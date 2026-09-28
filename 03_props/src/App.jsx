import React from 'react'
import Card from './components/Card'

 const App = () => {
  return (

    <div  className='parent'>
      <Card user="Tanuja Bharti" age={25}  img="https://plus.unsplash.com/premium_photo-1779751087423-5f6ddd767103?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
                                                                                                                                                                            
    <Card user="John Doe"  age ={19}    img="https://images.unsplash.com/photo-1778452419724-1f605dc17c46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
    <Card user="Jane Smith"  age={22} img="https://images.unsplash.com/photo-1778330520628-c52751f86b0c?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <Card user="Heroin"  age={24} img="https://images.unsplash.com/photo-1778244305115-4dd2bf7c8e86?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    
    
    </div>
  )
}

export default App
