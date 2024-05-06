import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../branches/blog/pages/LandingPage'
import { BlogStyle } from '../branches/blog/globalStyles'
import NavbarSection from '../branches/blog/components/Navbar/NavbarSection'

const BlogRoutes = () => {
  return (
    <div>
    <BlogStyle/>
    <NavbarSection/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
      </Routes>
    </div>
  )
}

export default BlogRoutes
