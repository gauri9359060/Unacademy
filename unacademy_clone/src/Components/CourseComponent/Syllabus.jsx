import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
const Syllabus = () => {
  const [syllabusCourse,setSyllabusCourse]=useState([])
  useEffect(() => {
    fetch(" https://unacademy-backend.herokuapp.com/slbsCmpltn")
      .then(res => res.json())
      .then(res => setSyllabusCourse(res))
      .catch(err => console.log(err))
  }, [])
  return (
   
      <div className={styles.eduCompContainer}>
        <div className={styles.eduCompHead}>
          <div>
            <h1 className={styles.eduHead}>Batches for syllabus completion</h1>
            <p className={styles.eduSubHead}>Boost your GATE & ESE exam preparation with extensive courses by the best educators</p>
          </div>
          <button className={styles.eduPricebtn}><h4>See all</h4></button>
        </div>
      <div className={styles.eduCardContainer}>
          {
            syllabusCourse.map((ele)=>{
              return (
                <div className={styles.completionCardMain}>
                  <div>
                    <img src={ele.image} alt="" width="100%" />
                  </div>
                  <div className={styles.syllabusCardDetails}>
                    <div className={styles.langBtn}>
                      {ele.language}
                    </div>
                    <h3 className={styles.syllabusDescription}>
                      {ele.description}
                    </h3>

                    <span><CalendarTodayOutlinedIcon sx={{ fontSize: "25px", color: "#3c4852", marginRight: "4px" }}/> Started on {ele.date}</span>
                    <span><LightModeOutlinedIcon sx={{ fontSize: "25px", color: "#3c4852", marginRight: "4px" }}/> {ele.shift} classes</span>
                    <span><PermIdentityOutlinedIcon sx={{ fontSize: "25px", color:"#3c4852",marginRight:"4px" }}/> {ele.teachers}</span>
                    <hr style={{margin:"15px"}} />
                    <div className={styles.schedule}>
                      <SlideshowOutlinedIcon />
                        View full schedule
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

  )
}

export default Syllabus
