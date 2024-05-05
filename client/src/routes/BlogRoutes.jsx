import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../branches/blog/pages/LandingPage'
import Navbar from '../branches/blog/components/NavBar/Navbar'
import { BlogStyle } from '../branches/blog/globalStyles'

const BlogRoutes = () => {
  return (
    <div>
    <BlogStyle/>
    <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
      </Routes>
    </div>
  )
}

export default BlogRoutes
