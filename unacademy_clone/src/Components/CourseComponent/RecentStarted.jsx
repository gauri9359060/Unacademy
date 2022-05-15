import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
const RecentlyStarted = () => {
    const [recent, setRecent] = useState([]);
    useEffect(() => {
        fetch("https://unacademy-backend.herokuapp.com/recent")
            .then(res => res.json())
            .then(res => setRecent(res))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className={styles.eduCompContainer}>
            <div className={styles.eduCompHead}>
                <div>
                    <h1 className={styles.eduHead}>Recently Started Courses</h1>
                    <p className={styles.eduSubHead}>Enroll in upcoming courses that best suit your schedule and UPSC CSE - GS exam syllabus</p>
                </div>
                <button className={styles.eduPricebtn}><h4>See all</h4></button>
            </div>
            <div className={styles.mainCardContainer}>
                {
                    recent.map((ele) => {
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
                                <p className={styles.comingP}>{ele.lessons} {ele.date}</p>
                                <h2 className={styles.comingName}>{ele.teachers}</h2>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RecentlyStarted
