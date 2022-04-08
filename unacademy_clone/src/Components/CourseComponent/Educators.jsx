import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const Educators = () => {
  const [educators,setEducators]=useState([]);
  
  useEffect(()=>{
    fetch("http://localhost:3000/educators")
    .then(res=>res.json())
    .then(res=>setEducators(res))
    .catch(err=>console.log(err))
  },[])

  return (
    <div className={styles.eduCompContainer}>
      <div className={styles.eduCompHead}>
        <div>
        <h1 className={styles.eduH1}>Prepare with Top Educators</h1>
        <p className={styles.eduP}> Access to India's best UPSC CSE - GS educators is just a subscription away</p>
        </div>
        <button className={styles.eduPricebtn}><h4>See all</h4></button>
      </div>
      <div className={styles.eduCardContainer}>
        {
          educators.map((ele)=>{
            return (
              <div className={styles.educardMain}>
                <div >
                  <img src={ele.image} alt="" className={styles.eduCardImg}/>
                  <img src="https://static.uacdn.net/web-cms/legend_badge_5eecca61f5.png" alt="" className={styles.eduCardImgIcon} />
                </div>
                <div className={styles.eduCardDetails}>
                  <h2 className={styles.educardH2}>{ele.name} <CheckCircleIcon sx={{color:"blue"}}/></h2>
                  <h5 className={styles.educardH5}>{ele.description}</h5>
                  <div>
                  
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

export default Educators
