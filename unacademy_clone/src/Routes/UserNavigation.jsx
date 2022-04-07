import React from 'react'
import {Routes,Route} from 'react-router-dom'
import CourseComp from '../Components/CourseComponent/CourseComp'
import Subscription from '../Components/CourseComponent/Subscription'
import Explore from '../Components/explorepage/Explore'
import Home from '../Components/HomeComponent/Home'
const UserNavigation = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/course' element={<CourseComp/>}/>
        <Route path='/explore' element ={<Explore/>}/>
        <Route path='/subscription' element ={<Subscription/>}/>
        {/* <Route path='/liteSubscription' element={}/>
        <Route path='/plusSubscription' element={ } />
        <Route path='/iconicSubscription' element={ } /> */}
      </Routes>
    </div>
  )
}

export default UserNavigation
