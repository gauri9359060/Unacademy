import React, { useEffect, useState } from 'react'

const PackageContainer = () => {
    const [pack,setPack]=useState([])
    useEffect(()=>{
        fetch("https://databaseunacademy.herokuapp.com/Price?type=iconic")
        .then(res=>res.json())
        .then(res=>{
            console.log("iconic:-",res)
            setPack(res)})
        .catch(err=>console.log(err))
    },[])

    return (
    <div>
      
    </div>
  )
}

export default PackageContainer
