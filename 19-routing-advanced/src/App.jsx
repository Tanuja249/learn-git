import React from 'react'
import Navbar from './component/Navbar'
import Navbar2 from './component/Navbar2'
import Footer from './component/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Men from './pages/Men'
import Womens from './pages/Womens'
import Kids from './pages/Kids'
import NotFound from './pages/NotFound'
import Courses from './pages/Courses'

import CourseDetail from './pages/CourseDetail'
import { Routes, Route} from 'react-router-dom'


const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:courseId' element={<CourseDetail />} />
        <Route >
        <Route path='/product' element={<Product />} />
        <Route path='/product/men' element={<Men />} />
         <Route path='/product/womens' element={<Womens />} />
          <Route path='/product/kids' element={<Kids />} />
          </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App