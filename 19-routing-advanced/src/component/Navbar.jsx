import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className= 'bg-cyan-950 py-4 px-8 flex justify-between items-center'>
        <h2 className= 'text-xl font-bold'>Infinity Software World</h2>
        <p>Welcome to our website!</p>
        <div className='flex gap-8'>
            <Link className='text-lg font-bold' to="/">Home</Link>
            <Link className='text-lg font-bold' to="/contact">Contact</Link>
            <Link className='text-lg font-bold' to="/about">About</Link>
            
            <Link className='text-lg font-bold' to="/courses">Courses</Link>
            <Link className='text-lg font-bold' to="/product">Product</Link>
        </div>
        
            
        
        
    </div>
  )
}

export default Navbar