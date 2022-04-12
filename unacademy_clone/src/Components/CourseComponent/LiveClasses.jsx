import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
const LiveClasses = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch("https://databaseunacademy.herokuapp.com/liveClassesCard/")
    .then(res=>res.json())
    .then(res=>{console.log(res)
      setData(res)})
    .catch(err=>console.log(err));
  },
  [])
  return (
    <div className={styles.livecompContainer} style={{ textAlign: "left" }}>
      <div className={styles.livetextContainer}>
        <div className={styles.LiveIntro}>
          FREE
        </div>
        <div className={styles.LiveHead}>
          Live Classes
        </div>
        <div className={styles.LiveSubHead}>
          Experience Plus for free and start learning from the best
        </div>
        <button className={styles.Pricebtn}><h4>See all</h4></button>
      </div>
      <div className={styles.liveCardContainer}>
          {
            data.map((ele)=>{
              return (
                <div className={styles.liveTileContainer}>
                    <div className={styles.liveImg}>
                      <img src={ele.image} alt="" />
                    </div>
                    <div className={styles.liveDetails}>
                    <h5 className={styles.liveH5} >{ele.heading}</h5>
                      <h6 className={styles.liveH6}>{ele.date}, {ele.time}</h6>
                      <h4 className={styles.liveH4}>{ele.name}</h4>
                    </div>
                </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default LiveClasses
