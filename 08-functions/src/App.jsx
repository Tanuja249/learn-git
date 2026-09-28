import React from 'react'

const App = () => {

const pageScrolling = (elem)=>{
  if(elem>0){
  console.log('sidha scrolling....');
  }else{
    console.log('ulta scrolling');
    
  }
  
}




  return (
    <div  onWheel={(elem)=>{
      
      
        pageScrolling(elem.deltaY)
      }}>
      <div className="page1">"page1"</div>
      <div className="page2">"page2"</div>
      <div className="page3">"page3"</div>
    </div>
  
  )
}

export default App