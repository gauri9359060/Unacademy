import { Button } from '@mui/material'
import React from 'react'
import styles from './styles.module.css'
const PackageChoose = () => {
    return (
        <div className={styles.Subscription} >
            <div className={styles.SubscriptionNav}>
                <img src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=384" alt="" />
            </div>
            <div className={styles.subsHead}>
                <h5 className={styles.subsH5}>
                    GATE & ESE
                </h5>
                <p className={styles.subsP}>Select a subscription plan that suits you</p>
            </div>
            <div className={styles.SubsCardContianer}>
                <div className={styles.PlusSubscription}>
                    <div className={styles.subscriptionCardHeader}>
                        <div>
                            <h3 className={styles.SubsH3}>plus</h3>
                            <p className={styles.packP}>Basic plan to get you started</p>
                        </div>
                        <img src="https://unacademy-prod.s3.ap-southeast-1.amazonaws.com/web-cms/Plus_icon_9029cac986.png" alt="" width="40%" />
                    </div>
                    <div className={styles.CourseBenifits}>
                        <ul className={styles.plusbenifitList}>
                            <li>
                                <img src="https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48" alt="" width="12%" />
                                <span> India's best educators</span>
                            </li>
                            <li>
                                <img src="https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48" alt="" width="12%" />
                                Interactive live classes
                            </li>
                            <li>
                                <img src="https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48" alt="" width="12%" />
                                Structured courses & PDFs
                            </li>
                            <li>
                                <img src="https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48" alt="" width="12%" />
                                Live tests & quizzes
                            </li>
                        </ul>
                    </div>
                    <div className={styles.subsButtonDiv}>
                        <button className={styles.packSelectBtn}>
                            Select PLUS
                        </button>
                    </div>
                </div>
                {/* ICOONIC subscription */}
                <div className={styles.IconicSubscription}>
                    <div className={styles.iconicHeadings}>
                        <div>
                            <h3 className={styles.SubsH3}>iconic</h3>
                            <p className={styles.subsP}>Take your GATE & ESE preparation to next level with Personal Coach</p>
                        </div>
                        <div style={{ padding: "3%", marginLeft: "5%" }}>
                            <img src="https://unacademy-prod.s3.ap-southeast-1.amazonaws.com/web-cms/Group_4894_2b74e644b9.png" alt="" width="55%" />
                        </div>
                    </div>
                    <div className={styles.CourseBenifits}>
                        <ul className={styles.plusbenifitList}>
                            <li>
                                <img src="https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48" alt="" width="12%" />
                                <span> India's best educators</span>
                            </li>
                            <li>
                                <img src="https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48" alt="" width="12%" />
                                Interactive live classes
                            </li>
                            <li>
                                <img src="https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48" alt="" width="12%" />
                                Structured courses & PDFs
                            </li>
                            <li>
                                <img src="https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48" alt="" width="12%" />
                                Live tests & quizzes
                            </li>
                        </ul>
                        <ul className={styles.plusbenifitList}>
                            <li>
                                <img src="https://static.uacdn.net/production/_next/static/images/yellowTick.png?q=75&w=48" alt="" width="12%" />
                                1:1 Live Mentorship
                            </li>
                            <li>
                                <img src="https://static.uacdn.net/production/_next/static/images/yellowTick.png?q=75&w=48" alt="" width="12%" />
                                Mains Q&A practice
                            </li>
                            <li>
                                <img src="https://static.uacdn.net/production/_next/static/images/yellowTick.png?q=75&w=48" alt="" width="12%" />
                                Daily Special Content
                            </li>
                            <li>
                                <img src="https://static.uacdn.net/production/_next/static/images/yellowTick.png?q=75&w=48" alt="" width="12%" />
                                All PLUS Benefits
                            </li>
                        </ul>
                    </div>
                    <div className={styles.buttons}>

                    <button className={styles.packSelectBtn}>
                        Select ICONIC
                    </button>
                    <button className={styles.learnMoreBtn}>Learn More</button>
                    </div>
                </div>
            </div>

            {/* Lite subscription */}
            <div className={styles.LiteSubscription}>
                <div className={styles.LiteHeadings}>
                    <div style={{width:"100%"}}>
                        <h3 className={styles.SubsH3}>Lite</h3>
                        <p className={styles.subsP}>Assess your preparation with tests</p>
                    </div>
                    <div style={{width:"55%"}
}>
                    <img src="https://unacademy-prod.s3.ap-southeast-1.amazonaws.com/web-cms/Lite3_8aed32b41f.png" alt="" width="30%" />
                    </div>
                </div>
                <div className={styles.CourseBenifits}>
                    <ul className={styles.plusbenifitList}>
                        <li>
                            <img src="https://static.uacdn.net/production/_next/static/images/blueTick.png?q=75&w=48" alt="" width="12%" />
                            Access to curated test series
                            </li>
                        <li>
                            <img src="https://static.uacdn.net/production/_next/static/images/blueTick.png?q=75&w=48" alt="" width="12%" />
                            Daily practice questions
                        </li>
                    </ul>
                </div>
                <button className={styles.packSelectBtn} style={{margin:"2em"}}>
                    Select LITE
                </button>
            </div>
        </div>

    )
}

export default PackageChoose