import React from 'react'
import {Routes,Route} from 'react-router-dom'
import CourseComp from '../Components/CourseComponent/CourseComp'
import Subscription from '../Components/CourseComponent/Subscription'
import Home from '../Components/HomeComponent/Home'
const UserNavigation = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/course' element={<CourseComp/>}/>
        <Route path='/subscription' element ={<Subscription/>}/>
      </Routes>
    </div>
  )
}

export default UserNavigation
