import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
const ComingSoon = () => {
    const [comingSoon,setComingSoon]=useState([]);
    useEffect(()=>{
        fetch(" https://unacademy-backend.herokuapp.com/comingSoon")
        .then(res=>res.json())
        .then(res=>setComingSoon(res))
        .catch(err=>console.log(err))
    },[])
  return (
      <div className={styles.eduCompContainer}>
          <div className={styles.eduCompHead}>
              <div>
                  <h1 className={styles.eduHead}>Courses starting soon</h1>
                  <p className={styles.eduSubHead}>Enroll in upcoming courses that best suit your schedule and UPSC CSE - GS exam syllabus</p>
              </div>
              <button className={styles.eduPricebtn}><h4>See all</h4></button>
          </div>
          <div className={styles.mainCardContainer}>
              {
                  comingSoon.map((ele)=>{
                   return (
                       <div className={styles.comingSoonCard}>
                           <div className={styles.comingImgContainer}>
                               <img src={ele.image} alt="" className={styles.comingImg} />
                           </div>
                           <div className={styles.btnContainer}>
                           <p className={styles.comingLangBtn}>
                               {ele.language}
                           </p>
                           <p className={styles.comingCourse}>{ele.course}</p>
                           </div>
                           <h5 className={styles.comingH5}>{ele.description}</h5>
                           <p className={styles.comingP}>{ele.date} {ele.lessons}</p>
                           <h2 className={styles.comingName}>{ele.teachers}</h2>
                       </div>
                   )   
                  })
              }
          </div>
    </div>
  )
}

export default ComingSoon
