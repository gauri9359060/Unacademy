import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const Educators = () => {
  const [educators,setEducators]=useState([]);
  
  useEffect(()=>{
    fetch(" https://unacademy-backend.herokuapp.com/educator")
    .then(res=>res.json())
    .then(res=>setEducators(res))
    .catch(err=>console.log(err))
  },[])

  return (
    <div className={styles.eduCompContainer}>
      <div className={styles.eduCompHead}>
        <div>
        <h1 className={styles.eduHead}>Prepare with Top Educators</h1>
        <p className={styles.eduSubHead}> Access to India's best UPSC CSE - GS educators is just a subscription away</p>
        </div>
        <button className={styles.eduPricebtn}><h4>See all</h4></button>
      </div>
      <div className={styles.eduCardContainer}>
        {
          educators.map((ele)=>{
            return (
              <div className={styles.educardMain}>
                <div className={styles.eduimgContainer} >
                  <img src={ele.image} alt="" className={styles.eduCardImg}/>
                  <img src="https://static.uacdn.net/web-cms/legend_badge_5eecca61f5.png" alt="" className={styles.eduCardImgIcon} />
                </div>
                <div className={styles.eduCardDetails}>
                  <h2 className={styles.educardH2}>{ele.name} <CheckCircleIcon sx={{color:"blue",height:"15px",width:"15px"}}/></h2>
                  <h5 className={styles.educardH5}>{ele.description}</h5>
                  <div className={styles.eduFame}>
                  <div>
                    <h3>{ele.followers}</h3>
                    <h5>Followers</h5>
                  </div>
                    <div>
                      <h3>{ele.watchMin}</h3>
                      <h5>Watch Min</h5>
                    </div>
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
