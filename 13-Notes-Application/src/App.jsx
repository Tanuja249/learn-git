import React from 'react'
import { useState } from 'react'

const App = () => {


  const [title, setTitle] = useState('')

  const [Detail, setDetail] = useState('')
  const [task,setTask] = useState([])


  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];
    copyTask.push({title,Detail})

    setTask(copyTask)
    

    setTitle('')
    setDetail('')
     
  }

  const deleteNote = (idx)=>{
        const copyTask =[...task]
        copyTask.splice(idx,1)
        setTask(copyTask)
  }
  return (
    <div className='h-screen lg:flex bg-black text-white'>


      <form onSubmit={(e) => {
        submitHandler(e)
      }}
      
      className='flex  lg:w-1/2 items-start flex-col  p-10 gap-4'>
      <h1 className='text-4xl font-bold'>Add Notes</h1>

        {/*phela inuput*/}
        <input type="text"
         placeholder="Enter Notes Heading" 
         className='px-5 w-full font-medium  py-2 border-2 outline-none rounded '
         value={title}
         onChange={(e)=>{
          setTitle(e.target.value)
         }}
         
         />
          {/* DETAILED VALA INPUT */}
         <textarea 
             type="text"
             className='px-5 h-32 w-full font-medium h-32 flex items-start flex-row py-2 outline-none border-2 rounded '
             placeholder='Write Details'
             value={Detail}
             onChange={(e) =>{
              setDetail(e.target.value)
             }}
             
             />
             <button  className='bg-white active:scale-95  w-full font-medium outline-none text-black px-5 py-2 rounded'>Add Notes</button>

      </form>
      <div className= 'lg:w-1/2  lg:border-l-2 p-10'>
      <h1 className='text-4xl font-bold'>Recent Notes</h1>
      <div className='flex flex-wrap items-start justify-start mt-6 gap-5 h-[90%] overflow-auto'>
        {task.map(function(elem,idx){


         return <div key={idx} className='relative h-52 bg-cover w-40 rounded-xl text-black py-9 px-4 bg-[url("https://i.pinimg.com/474x/a6/84/27/a68427ce2fd435c1b20f1c19fd125664.jpg")]'>
          <div>
          <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
          <p className='mt-4 leading-tight font-medium text-gray-700'>{elem.Detail}</p>
         </div>
          <button onClick={() => {
            deleteNote(idx)
          }}   className='w-full cursor-pointer active:scale-95 bg-red-500 py-1  text-xs rounded font-bold text-white'>Delete</button>

           </div>
        })}



      </div>

      </div>
    </div>
  )
}

export default App