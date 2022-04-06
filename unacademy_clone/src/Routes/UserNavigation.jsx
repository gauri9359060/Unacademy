import React from 'react'
import {Routes,Route} from 'react-router-dom'
import CourseComp from '../Components/CourseComponent/CourseComp'
import Home from '../Components/HomeComponent/Home'
const UserNavigation = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/course' element={<CourseComp/>}/>
      </Routes>
    </div>
  )
}

export default UserNavigation
