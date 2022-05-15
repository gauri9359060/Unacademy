import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
const BestLectures = () => {
    const [best, setBest] = useState([]);
    useEffect(() => {
        fetch(" https://unacademy-backend.herokuapp.com/best")
            .then(res => res.json())
            .then(res => setBest(res))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className={styles.eduCompContainer}>
            <div className={styles.eduCompHead}>
                <div>
                    <h1 className={styles.eduHead}>Best of all time</h1>
                    <p className={styles.eduSubHead}>Get unlimited access to popular past UPSC CSE - GS courses from our top educators</p>
                </div>
                <button className={styles.eduPricebtn}><h4>See all</h4></button>
            </div>
            <div className={styles.mainCardContainer}>
                {
                    best.map((ele) => {
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

export default BestLectures
