import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

   const params = useParams()
   console.log(params.courseId);
   
  return (
    <div>
        <h1>{params.courseId} Course Detail pageS</h1>
    </div>
  )
}

export default CourseDetail