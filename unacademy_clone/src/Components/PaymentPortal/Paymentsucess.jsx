import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Paymentsucess = () => {
    const navigate=useNavigate();
    useEffect(()=>{
       const id = setTimeout(() => {
            navigate('/course')
        }, 5000);
        
    })
  return (
    <div style={{width:"400px",height:"400px", margin:"auto",marginTop:"300px" }}>
          <img src="https://cdn.dribbble.com/users/69311/screenshots/1226327/congrats-gif-edit.gif" alt="" width="100%"/>
          <h1 style={{backgroundColor:"black", border:"2px solid white", borderRadius:"8px", color:"white"}}>You have successfully Subscribed to the course</h1>
    </div>
  )
}

export default Paymentsucess
