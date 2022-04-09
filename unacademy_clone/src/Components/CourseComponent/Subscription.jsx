import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContextProvider'
import Navbar from '../Navbar/Navbar'
import NavBarTwo from '../Navbar/NavbarTwo'
import PackageChoose from '../PaymentPortal/PackageChoose'

const Subscription = () => {
  const { auth } = useContext(AuthContext)
  return (
    <div>
      {auth ? <NavBarTwo /> : <Navbar />}
      <PackageChoose />
    </div>
  )
}

export default Subscription