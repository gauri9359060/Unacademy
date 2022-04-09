import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CourseComp from '../Components/CourseComponent/CourseComp'
import Subscription from '../Components/CourseComponent/Subscription'
import Explore from '../Components/explorepage/Explore'
import Home from '../Components/HomeComponent/Home'
import { Payment } from '../Components/PaymentPortal/Payment'
import Slider from '../Components/PaymentPortal/slider'
import TimePeriod from '../Components/PaymentPortal/TimePeriod'
const UserNavigation = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/course' element={<CourseComp />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/subscription' element={<Subscription />} />
        <Route path='/timePeriod' element={<TimePeriod/>}/>
        <Route path='/payment' element ={<Payment/>}/>
        {/* <Route path='/liteSubscription' element={}/>
        <Route path='/plusSubscription' element={ } />
        <Route path='/iconicSubscription' element={ } /> */}
      </Routes>
    </div>
  )
}

export default UserNavigation